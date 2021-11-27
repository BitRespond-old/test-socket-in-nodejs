# test-socket-in-nodejs

Test socket in nodejs

Initial code is taken from [Get stated | Socket.io](https://socket.io/get-started/chat)

# Problems

1. Nested socket listener is `whatsapp:login`
2. On Auth return user is logged in
3. init `initWebSocket` and `initWhatsappServices` after Auth successfully connected
   probably move into `client.on("authenticated")`
