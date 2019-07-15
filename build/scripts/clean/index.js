const cleanScript = require('./clean')

let doClean = async () => {
    await cleanScript(['libs/*.js'])
}

doClean()