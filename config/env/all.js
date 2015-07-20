var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3333,
	modelsDir : rootPath + '/app/models'
};
