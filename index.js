var fs = require('fs');
var ini = require('ini');

var defaults = ini.parse(fs.readFileSync(path.resolve(__dirname, '.upuprc-dist'), 'utf-8'));

module.exports = require('rc')('upup', defaults);