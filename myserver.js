var http = require("http")
var fs = require("fs")
var localdate = require('./myserverdate')

// http.createServer(  function(req,res){
//     res.write(200,{'Content-Type': 'text/html'})
//     res.write("Hello Brother = "+ localdate.mydatetimevar());
//     res.end();
// }).listen(9001);

//Read a file
// http.createServer( function(req,res){
//     fs.readFile('demofile1.html',function(err,data){       
//         res.write(data)
//         res.end();
//     })
// }).listen(9001);

//Append a File
// http.createServer( function(req,res){
//     fs.appendFile('filename.txt','Hello',function(err){        
//         if(err) throw err;
//         console.log("Saved")
//         res.end();
//     })
// } 
// ).listen(9000)


//Create an Empty File using open
// http.createServer( function(req,res){
//     fs.open('file_using_open.txt','w',function(err,file){        
//         if(err) throw err;
//         console.log("Saved")
//         res.end();
//     })
// } 
// ).listen(9000)


// Append a File with more text
// http.createServer( function(req,res){
//     fs.appendFile('filename.txt','Hi Bye',function(err){        
//         if(err) throw err;
//         console.log("Saved")
//         res.end();
//     })
// } 
// ).listen(9000)


// Wrte a File - replace content
// http.createServer( function(req,res){
//     fs.writeFile('filename.txt','Tumhe',function(err){        
//         if(err) throw err;
//         console.log("Saved")
//         res.end();
//     })
// } 
// ).listen(9000);


// Rename "mynewfile1.txt" to "myrenamedfile.txt":
// var fs = require('fs');
// fs.rename('filename.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

//Delete a file
// fs.unlink('myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });


//URL
// var url =  require("url");
// var address = 'http://localhost:8080/default.html?year=2007'
// var q = url.parse(address,true)

// console.log("host="+q.host)
// console.log("hostname="+q.hostname)
// console.log("pathname="+q.pathname)
// console.log("pathname="+q.query.year)

//Events Module
//The EventEmitter Object
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var myEventEmitter = function(){
//     console.log("I hear a scream")
// }
// eventEmitter.on('scream',myEventEmitter);
// eventEmitter.emit('scream')

// var varmod = require('./varmod')
// var arr = [1,2,34,5,6,7,10]

// var result = arr.filter(n=>{
//     return n===34;
// })

var a = (a,b)=>a*b;

console.log(a(1,2));