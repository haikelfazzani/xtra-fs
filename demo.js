const fs = require('fs');
const { copyFolder, copyFiles, filesIntoOne, isEmptyDir, isEmptyDirSync } = require('./src/index');

const files = [
  { from: 'test.js', destFolder: 'test2' },
  { from: 'test/1.css', destFolder: 'test2' },
  { from: 'test/new/4.ts', destFolder: 'test2' },
];

(async () => {
  
  console.log(isEmptyDirSync(__dirname+ '/tes'));
  

})()