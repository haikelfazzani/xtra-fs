const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

var resetColor = '\x1b[0m';
var FgYellow = "\x1b[33m";
var FgCyan = "\x1b[36m";

async function copyFolder (src, dest, writeToConsole = false) {
  const entries = await fsPromises.readdir(src, { withFileTypes: true });

  try {
    await fsPromises.access(dest, fs.constants.R_OK | fs.constants.W_OK);
  } catch (error) {
    await fsPromises.mkdir(dest);
  }

  for (let entry of entries) {

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
      writeToConsole
        ? console.log(FgCyan, '-> Copy folder: ', entry.name, ' ==> ', destPath, resetColor)
        : '';
    } else {
      await fsPromises.copyFile(srcPath, destPath);
      writeToConsole
        ? console.log(FgYellow, '-> Copy file: ', entry.name, ' ==> ', destPath, resetColor)
        : '';
    }
  }
}

module.exports = copyFolder;