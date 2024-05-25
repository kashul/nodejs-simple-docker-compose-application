const http = require("http");
require('dotenv').config();
const PORT = process.env.PORT;
const SECRET_FILE = process.env.SECRET_FILE;

//host IP depend on docker network which we have assigned to container. Network assign Ip adrresses to each container.
// As well as we can use cantainer name as hostname to commiuncate with other containers
//  It has to be used when comiunicate with containers
const APP_TWO_HOST = process.env.APP_TWO_HOST;
const APP_TWO_PORT = process.env.APP_TWO_PORT;

const server = http.createServer((req, res) => {
  if(SECRET_FILE != undefined){
    const fs = require('fs')
    console.log("SECRET",fs.readFileSync(SECRET_FILE).toString())
  }
  

  if (req.url === "/getDataFromAppOne" && req.method === "GET") {
    const options = {
      hostname: APP_TWO_HOST,
      port: APP_TWO_PORT,
      path: '/sendDataToAppOne',
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      }
    };

    const receiverReq = http.request(options, receiverRes => {
     
      receiverRes.on('data', chunk => {
        console.log(`Response from App Two: ${chunk}`);
        res.end(chunk)
      });
    });
  
    receiverReq.on('error', error => {
      console.error(error);
      
    });
  

    receiverReq.end();

  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }


});

server.listen(PORT, () => {
  console.log(`App One server running at http://localhost:${PORT}/`);
});
