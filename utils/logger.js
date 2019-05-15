const chalk = require('chalk')
const datetime = require('silly-datetime')
datetime.locate('zh-cn')
var Atime=datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')

module.exports = {
  debug: message => console.log(`${chalk.bgCyan('DEBUG')} ${Atime} ${message}`),
  info: message => console.log(`${chalk.bgCyan('INFO')} ${Atime} ${message}`),
  notice: message => console.log(`${chalk.bgGreen('NOTICE')} ${Atime} ${message}`),
  warning: message => console.log(`${chalk.bgYellow('WARNING')} ${Atime} ${message}`),
  error: message => console.log(`${chalk.bgRed('ERROR')} ${Atime} ${message}`),
}
