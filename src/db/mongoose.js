const mongoose = require("mongoose");
const validator = require("validator");
//create mongoose db by path/databasename,{options}
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
console.log("Started");
