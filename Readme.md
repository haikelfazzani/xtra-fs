# 📑 xtra-fs  
fs extra methods for nodejs

![](https://badgen.net/bundlephobia/min/xtra-fs)  ![](https://badgen.net/npm/v/xtra-fs)
```js
npm i xtra-fs --save-dev
```

### Usage
```
const { copyFolder, copyFiles, filesIntoOne, isEmptyDir, isEmptyDirSync } = require('xtra-fs');
```

### Methods and examples
- **copyFiles(arrayOfFiles, writeToConsole?: boolean): void**  
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

- **filesIntoOne(arrayOfFiles, destinatonFile, writeToConsole?: boolean): void**  
*combine files into file*
```js
filesIntoOne(['test/1.css', 'test/3.css'], 'test2/bundle.css', true)
// Files are bundle it ->  test2/bundle.css
```

- **isEmptyDir(directoryPath): Promise<boolean>**  
*check if the existing directory is empty or not*
```js
isEmptyDir(__dirname + '/my-dir-path')
  .then(result => console.log(result)) // true or false
  .catch(error => console.log(error)) // null
```

- **isEmptyDirSync(directoryPath): boolean**  
*check if the existing directory is empty or not*
```js
isEmptyDirSync(__dirname + '/another-path') // true or false
```

### Note
- required Node 10+

### License
MIT