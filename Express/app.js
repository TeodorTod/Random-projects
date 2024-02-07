const Circle = require('./circle');
const circle = new Circle;


console.log(circle.area(5));
console.log(circle.circumference(5));


// const http = require('node:http');


// // Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(3000);