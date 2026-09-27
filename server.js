const http=require("http");
const fs=require("fs");
const path=require("path");

const server=http.createServer((request,response)=>{

  if(request.url==="/"){
    const html=fs.readFileSync(
      path.join(__dirname,"public","index.html"),"utf8"
    );

    response.setHeader("Content-Type","text/html");
    response.end(html);
  }
  else if(request.url==="/style.css")
  {
    const css=fs.readFileSync(
      path.join(__dirname,"public","style.css"),"utf8"
    );

    response.setHeader("Content-Type","text/css");
    response.end(css);
  }
  else if(request.url==="/script.js")
  {
      const script=fs.readFileSync(
      path.join(__dirname,"public","script.js"),"utf8"
    );

    response.setHeader("Content-Type","application/json");
    response.end(script);
  }
  else if(request.method==="GET" && request.url==="/api/students"){
    const data=fs.readFileSync(
      path.join(__dirname,"students.json"),"utf8"
    );

    response.setHeader("Content-Type","application/json");
    response.end(data);
  }
  else
  {
    response.statusCode=404;

    response.end("Page not found");
  }
})

server.listen(5000,()=>{
  console.log("server was running in:localhost:5000");
})