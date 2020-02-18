const fs = require('fs');
var FgYellow = "\x1b[33m";
var resetColor = '\x1b[0m';

function getFilesContents (files) {
  let contents = '';
  files.forEach(file => {
    if (fs.existsSync(file)) {
      contents += fs.readFileSync(file, { encoding: 'UTF-8' });
    }
  });
  return contents;
}

module.exports = function filesIntoOne (files, destFile, writeToConsole = false) {

  const filesContent = getFilesContents(files);

  fs.writeFile(destFile, filesContent, (err) => {
    if (err) { writeToConsole ? console.log(err) : '' }
    else {
      writeToConsole
        ? console.log(FgYellow, '-> Files are bundle it ==> ', destFile, resetColor)
        : '';
    }
  });
}