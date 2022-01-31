const express = require("express");
const app = express();
const port = 2008;

const blogs = [{ entry: "1", words: "", length: "" }];

app.use(express.json());
app.get("/", function (req, res) {
  res.send(blogs);
});

//

app.post("/", function (req, res) {
  blogs.push(req.blogs);
  res.send(200);
  console.log("body", req.body);
});

app.listen(port, () => {
  console.log(`server running on port ${port} `);
});
