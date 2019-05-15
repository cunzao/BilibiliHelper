const chalk = require('chalk')
const datetime = require('silly-datetime')

module.exports = {
  debug: message => console.log(`${chalk.bgCyan('DEBUG')} ${datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')} ${message}`),
  info: message => console.log(`${chalk.bgCyan('INFO')} ${datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')} ${message}`),
  notice: message => console.log(`${chalk.bgGreen('NOTICE')} ${datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')} ${message}`),
  warning: message => console.log(`${chalk.bgYellow('WARNING')} ${datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')} ${message}`),
  error: message => console.log(`${chalk.bgRed('ERROR')} ${datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')} ${message}`),
}
