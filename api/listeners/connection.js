module.exports = (io) => {
  io.on("connection", (socket) => { 
    const count = io.engine.clientsCount;
    console.log("New client !");   
    socket.join("home");
    io.to("home").emit("user connected", count, socket.id);

    socket.on("disconnect", (reason) => { 
      console.log(reason);
      const count = io.engine.clientsCount;
      console.log("client disconnected!");   
      io.to("home").emit("user connected", count, socket.id);
    });
  });
}