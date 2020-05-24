const express = require("express");
const app = express();
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const port = process.env.PORT;

//parse incoming json to object
app.use(express.json());
//register router
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("App is running on port" + port);
});
