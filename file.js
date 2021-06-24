const fs = require('fs');
//reading file in file system
fs.readFile('./docs/blog1.txt',(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());
});
//writing files
fs.writeFile('./docs/blog3.txt','yes evans this will be writen on your life...keep working and soon you will smile',(err,res)=>{
  if(err){
    console.log(err);
  }
  console.log(res = 'writing successful');
});
//creating directory
if(!fs.existsSync('./muinde')){
fs.mkdir('./muinde',(err)=>{ 
if(err){
  console.log(err);
}console.log('foulder created ');
});
}

