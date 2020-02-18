const { copyFolder, copyFiles, filesIntoOne } = require('./src/index');

const files = [
  { from: 'test.js', destFolder: 'test2' },
  { from: 'test/1.css', destFolder: 'test2' },
  { from: 'test/new/4.ts', destFolder: 'test2' },
]

//copyFiles(files, true);
//copyFolder('test', 'test2', true)


filesIntoOne(['test/1.css', 'test/4.css'], 'test2/bundle.css');
