const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Client } = require("whatsapp-web.js");
const { Server } = require("socket.io");
const io = new Server(server);

const client = new Client({
  session: {},
  puppeteer: {
    browserWSEndpoint: `ws://127.0.0.1:49514/devtools/browser/07426823-2ef1-45cf-982d-7f79041a0225`,
  },
});
client.initialize();

client.on("qr", (qr) => {
  console.log("QR", qr);
});

client.on("auth_failure", (m) => {
  console.log("auth_failure", m);
});

client.on("authenticated", (session) => {
  console.log("authenticated", session);
});

client.on("ready", () => {
  console.log("Client is ready!");
  main();
});

console.log("changes 9");

const main = async () => {
  const chats = await client.getChats();
  console.log(chats.length);
};

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected change 1");

//   socket.on("login", () => {
//     console.log("login changes 4");

//     client.on("qr", (qr) => {
//       console.log("qr changes 1");
//     });
//   });
// });

server.listen(3000, () => {
  console.log("listening on *:3000");
});
