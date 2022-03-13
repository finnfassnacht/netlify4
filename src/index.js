const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/hi", (req, res) => {
  res.json({
    hello: "hi!"
  });
});
router.get("/data", (req, res) => {
    res.json({
      data: "data came from the server!! "
    });
  });

app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);