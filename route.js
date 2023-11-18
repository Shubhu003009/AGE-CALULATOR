
let http = require('http')


http.createServer((req,res)=>{
    res.end('shubham')
}).listen(80,()=>{
    console.log(`server running on : http://localhost:80`);
})
