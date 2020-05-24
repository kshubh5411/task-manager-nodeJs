const User = require("../src/models/user");
const Task = require("../src/models/task");

const main = async () => {
  // find user with id
  const task = await Task.findById("5ec219db41650b4e3508f52c");
  await task.populate("owner").execPopulate();
  console.log(task);

  //find all task associated with userId
  const user = await User.findById("5ec219449542384e26e1013e");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};
main();
