const cleanScript = require('./clean')
const { zax } = require('../../../package.json')

const { cleanDirs } = zax

let doClean = async () => {
	await cleanScript(cleanDirs)
}

doClean()
