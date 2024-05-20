const http = require("http");
require('dotenv').config();
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {
  // Prepare data to send
  const data = "Hello, World! from App Two";
  if (req.url === "/sendDataToAppOne" && req.method === "GET") {
    console.log("Received request from App One");

    res.write(data);

    res.end();
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }


});

server.listen(PORT, () => {
  console.log(`App Two server running at http://localhost:${PORT}/`);
});
