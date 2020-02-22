const fs = require('fs');

function isEmptyDir (dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) reject(err);
      else resolve(files.length === 0);
    });
  });
}

function isEmptyDirSync (dirPath) {
  try {
    return fs.readdirSync(dirPath).length === 0;
  } catch (error) {
    return error;
  }
}

module.exports = { isEmptyDir, isEmptyDirSync };