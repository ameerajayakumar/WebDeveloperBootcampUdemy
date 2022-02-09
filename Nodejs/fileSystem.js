const fs = require('fs');
fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("inside callback")
  if (err) throw err;
});
console.log("After MKDIR")