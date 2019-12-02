/*
 * @Author: jsonchou
 * @Date: 2019-08-01 18:04:40
 * @Last Modified by: jsonchou
 * @Last Modified time: 2019-10-22 16:53:11
 */
const path = require('path')
const chalk = require('chalk')
const doneRainbow = require('done-rainbow')
const execSync = require('child_process').execSync
const { version, zax } = require('../../../package.json')
const checkNpm = require('./checkNpm')
const RELEASE_LOG = process.argv[2] || ''

const { innerModule, needBuild, test, docs, cleanDirs } = zax

let increaseVersion = () => {
	let prefix = version.slice(0, version.lastIndexOf('.'))
	let suffix = version.slice(version.lastIndexOf('.') + 1)
	return prefix + '.' + (parseInt(suffix) + 1)
}

let doRun = async cmd => {
	try {
		execSync(`npm run ${cmd}`, { stdio: 'inherit' })
	} catch (err) {
		console.log(`npm run ${cmd}`, err)
		throw err
	}
}

let doPublish = async () => {

	if (!RELEASE_LOG) {
		console.error(chalk.bold.red('please input release log'))
		return
	}

	let safeNpm = checkNpm(innerModule)

	if (!safeNpm) {
		return
	}

	let version = increaseVersion()

	cleanDirs && cleanDirs.length && await doRun('clean')

	test && await doRun('test')

	docs && await doRun('docs')

	needBuild && await doRun('build')

	try {
		execSync(`git add .`, { stdio: 'inherit' })
		let logInfo = `release: v${version} ${RELEASE_LOG}`
		execSync(`git commit -am "${logInfo}"`, { stdio: 'inherit' })
		execSync(`git push`, { stdio: 'inherit' })
	} catch (err) {
		console.log('git', err)
		throw err
	}

	try {
		execSync(`npm version ${version} `, { stdio: 'inherit' })
		execSync(`npm publish`, { stdio: 'inherit' })
	} catch (err) {
		console.log('znpm', err)
		throw err
	}

	execSync(`git status`, { stdio: 'inherit' })
	execSync(`git push`, { stdio: 'inherit' })

	doneRainbow(`version ${version} published!`)
}

doPublish()
