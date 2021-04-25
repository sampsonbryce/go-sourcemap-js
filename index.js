const http = require("http");
const parser = require("stacktrace-parser");

const captureException = (exception) => {
  const message = exception.message;
  const name = exception.name;
  const trace = parser.parse(exception.stack);

  const data = JSON.stringify({
    name,
    message,
    trace,
  });

  const options = {
    hostname: "localhost",
    port: 8080,
    path: "/exception",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const req = http.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
};

module.exports = { captureException };
