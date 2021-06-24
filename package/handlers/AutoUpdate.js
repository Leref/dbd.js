const { exec } = require("child_process");
const fetch = require("node-fetch");
const json = require("../../package.json");
module.exports = async () => {
  const get = await fetch("https://api.leref.ga/package/version", {
    method: "GET",
  });
  const response = await get.json();
  if (respone && json.version !== response.version) {
    console.warn(
      "\x1b[32mDBD.JS Auto Update: \x1b[0mnpm install dbd.js@" +
        response.version +
        ""
    );
    exec("npm install dbd.js@latest", (err, stdout, stdeer) => {
      if (err) {
        return console.error(
          "\x1b[31mDBD.JS Auto Update ran to error, ERR: \x1b[0m\n" + err
        );
      }
      console.log(stdeer);
      console.log(stdout);
      console.log(
        "\x1b[32mDBD.JS Auto Update: \x1b[0mSuccessfully Installed DBD.JS Version " +
          response.version +
          ", Restarting in 3 Seconds"
      );
      setTimeout(function () {
        process.on("exit", () => {
          require("child_process").spawn(process.argv.shift(), process.argv, {
            cwd: process.cwd(),
            detached: true,
            stdio: "inherit",
          });
        });
        process.exit();
      }, 3000);
    });
  }
};
