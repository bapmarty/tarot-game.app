module.exports = io => {
  const fs = require("fs");
  const path = require("path");

  // init listeners path
  const listenersPath = path.resolve(__dirname);

  // Read all of files in current path
  fs.readdir(listenersPath, (err, files) => {
    if (err) {
      process.exit(1);
      console.log(err);
    }

    files.map(fileName => {
      if (fileName !== "index.js") {
        console.debug("[%s] Init listener %s ", new Date(), fileName);
        const listener = require(path.resolve(__dirname, fileName));

        listener(io);
      }
    });
  });
}