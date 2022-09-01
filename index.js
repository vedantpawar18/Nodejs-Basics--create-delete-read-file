var fs = require('fs');


const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = (argv[1])
const operator2 = (argv[2])
  


 if (operation=="read")
 {
    fs.readFile(operator1, 'utf8',(err, data) => {
        console.log(data);
     })
 }

 if (operation=="create")
 {
    fs.appendFile(operator1, operator2, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

 }
 if (operation=="delete")
 {
    fs.unlink(operator1, (err) => {
        if (err) {
            throw err;
        }
        console.log("File is deleted.");
    });
 }

 if (operation=="rename")
 {
    fs.rename(operator1, operator2, function (err) {
        if (err) throw err;
        console.log('File Renamed.');
      });
 }

 if (operation=="list")
 {
    fs.readdir( operator1, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
 }