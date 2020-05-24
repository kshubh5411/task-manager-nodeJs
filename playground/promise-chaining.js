//remove task and then get total no of tasks

require("../src/db/mongoose");

const Task = require("../src/models/task");
// //by promise
// Task.findByIdAndDelete("5ebedd6ae7ce9a206950847f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//by async await
const getTaskDeleted = async () => {
  const task = await Task.findByIdAndDelete("5ebedd7de7ce9a2069508483");
  const noOfTask = await Task.countDocuments({});
  console.log(task);

  return noOfTask;
};

getTaskDeleted()
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
