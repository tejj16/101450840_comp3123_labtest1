const fileSystem = require('fs');
const filePath = require('path');

const logFolder = filePath.join(__dirname, 'Archives');

// it will erase the  archive files and folder function
function eraseArchives() {
  if (fileSystem.existsSync(logFolder)) {
    console.log("Archives to erase:");
    fileSystem.readdirSync(logFolder).forEach(archive => {
      console.log(archive);
      fileSystem.unlinkSync(filePath.join(logFolder, archive));
    });
    fileSystem.rmdirSync(logFolder);
    console.log("Archives folder erased.");
  } else {
    console.log("Archives folder does not exist.");
  }
}

// to gnerate archive files
function generateArchives() {
  if (!fileSystem.existsSync(logFolder)) {
    fileSystem.mkdirSync(logFolder);
  }

  process.chdir(logFolder);

  for (let index = 1; index <= 10; index++) {
    const archiveName = `archive${index}.txt`;
    fileSystem.writeFileSync(archiveName, `This is archive file ${index}`);
    console.log(archiveName);
  }

  console.log("Archive files generated.");
}

// it will e4xecute erace archives
console.log("Erasing archives:");
eraseArchives();

// it willExecute generate archives
console.log("\nGenerating archives:");
generateArchives();

//// it will  demonstrate how to remove of recently generated archives.
console.log("\nErasing archives again:");
eraseArchives();