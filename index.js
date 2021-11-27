const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Client } = require("whatsapp-web.js");
const { Server } = require("socket.io");
const io = new Server(server);
const client = new Client({ puppeteer: { headless: false } });
client.initialize();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected change 1");

  socket.on("login", () => {
    console.log("login changes 4");

    client.on("qr", (qr) => {
      console.log("qr changes 1");
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
