/*
 * 内部模块使用znpm，外部模块使用npm
 * @Author: jsonchou
 * @Date: 2019-08-01 18:04:40
 * @Last Modified by: jsonchou
 * @Last Modified time: 2019-08-29 10:38:45
 */

const chalk = require('chalk')
const execSync = require('child_process').execSync

let checkNpm =  (isInnerModule) => {

	const txt = isInnerModule ? '内网模块' : '外网模块'

	console.log(txt)

    if (isInnerModule) {
        // 该模块为内部模块
        try {
            let res = execSync(`nrm current`).toString()
            if (res.indexOf('znpm') == -1) {
                console.error(`${txt}发布，请先使用【nrm use ${chalk.bold.green('znpm')}】，再使用【npm run release】.`)
                return false
            }
            return true
        } catch (err) {
            console.log('execSync nrm current bugs', err)
            return false
        }
    } else {
        // 该模块为外部模块
        try {
            let res = execSync(`nrm current`).toString()
            if (res.indexOf('znpm') > -1) {
                console.error(`${txt}发布，请先使用【nrm use ${chalk.bold.green('npm')}】，再使用【npm run release】.`)
                return false
            }
            return true
        } catch (err) {
            console.log('execSync nrm current bugs', err)
            return false
        }
    }

}

module.exports = checkNpm
