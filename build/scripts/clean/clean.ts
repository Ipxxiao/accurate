const fs = require('fs-extra')
const glob = require("glob")
const path = require('path')

module.exports = async (files) => {
    if (files && files.length) {
        files.forEach(sub => {
            let subFiles = glob.sync(path.join(process.cwd(), sub))
            subFiles.forEach(child => {
                fs.removeSync(child)
            })
        })
    }
    return 'done'
}