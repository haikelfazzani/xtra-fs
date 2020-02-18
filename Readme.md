# 📑 xtra-fs  
fs extra methods for nodejs

![](https://badgen.net/bundlephobia/min/xtra-fs)  ![](https://badgen.net/npm/v/xtra-fs)
```js
npm i xtra-fs --save-dev
```

### Usage
```
const { copyFolder, copyFiles, filesIntoOne } = require('xtra-fs');
```

### Methods and examples
- **copyFiles(arrayOfFiles: Array, writeToConsole?: boolean): void**  
*Copy files into folder*
```js
// writeToConsole by default: false
const files = [
  { from: 'test.js', destFolder: 'folder' },
  { from: 'test/new/4.ts', destFolder: 'folder' },
];

copyFiles(files, true);
// Success copy:  test/1.css  ->  folder (console stdout)
// Success copy:  test.js  ->  folder (console stdout)
```

- **copyFolder(sourceFolder, destinationFolder, writeToConsole?: boolean): void**  
*Copy folder files (and subfolders) into another*
```js
copyFolder('test', 'folder', true);
// Copy file:  1.css  ->  folder\1.css (console stdout)
// Copy folder:  new  ->  folder\new (console stdout)
```

- **filesIntoOne(arrayOfFiles: Array<string>, destinatonFile, writeToConsole?: boolean): void**  
*combine files into file*
```js
filesIntoOne(['test/1.css', 'test/3.css'], 'test2/bundle.css', true)
// Files are bundle it ->  test2/bundle.css
```

### Note
- required Node 10+

### License
MIT