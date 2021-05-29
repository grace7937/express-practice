const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://aaaa:aaaa@cluster0.q3dj2.mongodb.net/aaaa?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


  const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    saveDate: {
      type: Date,
      default: Date.now,
    },
  });


  const User = mongoose.model("User", UserSchema);

  const me = new User({
    name: "Mike",
    age: 27,
  });

  me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });
