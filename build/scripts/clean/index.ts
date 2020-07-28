const cleanScript = require('./clean.ts')
const { zax } = require('../../../package.json')

const { cleanDirs } = zax

let doClean = async () => {
	await cleanScript(cleanDirs)
}

doClean()
