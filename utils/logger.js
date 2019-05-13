const chalk = require('chalk')
const datetime = require('silly-datetime')

module.exports = {
  debug: message => console.log(`${chalk.bgCyan('DEBUG')} ${datetime} ${message}`),
  info: message => console.log(`${chalk.bgCyan('INFO')} ${datetime} ${message}`),
  notice: message => console.log(`${chalk.bgGreen('NOTICE')} ${datetime} ${message}`),
  warning: message => console.log(`${chalk.bgYellow('WARNING')} ${datetime} ${message}`),
  error: message => console.log(`${chalk.bgRed('ERROR')} ${datetime} ${message}`),
}
