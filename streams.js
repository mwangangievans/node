const fs =require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt',{encoding : 'utf8'});
readStream.on('data',(chunk)=>{
  console.log('-------my data goes here-----');
  console.log(chunk);
});