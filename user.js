/* mongoose.js */
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('DB가 열렸습니다.');
});

const UserSchema = mongoose.Schema({
    ID: String,
    PWD: String,
  });

  const User = mongoose.model("user", UserSchema);

  const silence = new User({ ID: "asdfasdf", PWD: "qqqqqqq" });
  silence.save();


  ///////////////////////////////////////////////////////////////


  // const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     id: String,
//     pwd: String,
//   },{timestamps: true});

//   module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("erㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ");
  } else {
    console.log("connected to data gㅎㅎ");
  }
});

const userSchema = new Schema(
  {
    id: String,
    pwd: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);





