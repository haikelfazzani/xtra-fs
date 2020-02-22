var copyFolder = require('./copy-folder');
var copyFiles = require('./copy-files');
var filesIntoOne = require('./files-into-one');
var { isEmptyDir, isEmptyDirSync } = require('./is-empty-dir');

module.exports = {
  copyFolder,
  copyFiles,
  filesIntoOne,
  isEmptyDir, isEmptyDirSync
};