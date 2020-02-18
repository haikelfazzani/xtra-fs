const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

var resetColor = '\x1b[0m';
var FgRed = '\x1b[31m';
var FgGreen = '\x1b[32m';

/**
 * @param {Array<String>} files 
 * @param {Boolean} writeToConsole 
 * @returns
 */
function copyFiles (files, writeToConsole = false) {

  files.forEach(async (file) => {

    if (!fs.existsSync(file.destFolder)) {
      await fsPromises.mkdir(file.destFolder, { recursive: true });
    }

    let filePathDest = path.join(file.destFolder, path.basename(file.from));

    if (!fs.existsSync(filePathDest)) {
      try {
        let data = await fsPromises.readFile(file.from, { encoding: 'utf8' });
        await fsPromises.writeFile(filePathDest, data);
      } catch (error) {
        writeToConsole
          ? console.log(FgRed, "-> Fail copy: ", file.from, " ==> ", file.destFolder, '\n', error.message, '\n',resetColor)
          : '';
      }
    }
    else {
      file.destFolder = file.destFolder + '/' + path.basename(file.from);
      try {
        await fsPromises.copyFile(path.join(file.from), file.destFolder);
        writeToConsole
          ? console.log(FgGreen, "-> Success copy: ", file.from, " ==> ", file.destFolder, resetColor)
          : '';
      } catch (error) {
        writeToConsole ? console.log(FgRed, error.message, resetColor) : '';
      }
    }
  });
}

module.exports = copyFiles;