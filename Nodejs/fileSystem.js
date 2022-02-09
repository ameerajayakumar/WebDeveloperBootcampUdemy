const fs = require('fs');
const folderName = process.argv[2] || 'Project';
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("inside callback")
//   if (err) throw err;
// });
try{
fs.mkdirSync(folderName); 
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/app.css`, '')
fs.writeFileSync(`${folderName}/app.js`, '')
console.log("After MKDIR");
}
catch(e){
    console.log(e);
}