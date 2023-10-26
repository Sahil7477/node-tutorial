const { log } = require("console");
let naming = require("./app");

naming.namefunc("ritwika");
require("./mindgr");
//shows the user info
let os = require("os");
let user = os.userInfo();
console.log(user);

//shows the systen uptime in seconds since the last reboot

console.log(`the system uptime is ${os.uptime()} seconds`);

//os info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  dd: os.platform(),
};
console.log(currentOS);
//shows the path of the file

let path = require("path");

let filepath = path.join("/FOLDER", "subfolder", "test.txt");
console.log(filepath);

let bn = path.basename(filepath);
console.log(bn);

let abs =path.resolve(__dirname,"FOLDER","subfolder","test.txt");
console.log(abs);


let {readFileSync,writeFileSync} = require("fs");

let first =readFileSync("./FOLDER/first.txt","utf-8");
let second=readFileSync("./FOLDER/second.txt","utf-8");
console.log(first,second);

writeFileSync("./FOLDER/result.txt",`here is the result: ${first},${second}`);

let {readFile,writeFile} = require("fs");

readFile('./Folder/result.txt','utf8', (err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
})
