import express from "express";

const app = express();

app.use('/test', (req, res) => {
  res.send("test 1 completed")
})

app.use('/test2', (req, res) => {
  res.send("test 1 completed")
})

app.listen(1956, () => {
  console.log("server  on va  in too 1956 port");
});
