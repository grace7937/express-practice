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






