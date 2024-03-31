const express = require("express");
const userRouter = require("./routers/user.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
