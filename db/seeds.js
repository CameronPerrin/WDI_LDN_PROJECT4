var mongoose = require('mongoose');
var Chapter = require('../models/chapter');
var User = require('../models/user');

var databaseUri = require('../config/db')(process.env.NODE_ENV || 'development');
mongoose.connect(databaseUri);

Chapter.collection.drop();
User.collection.drop();

console.log("Chapters and users dropped!");

User.create({
  username: "cameron",
  email: "cam@cam.com",
  password: "password",
  passwordConfirmation: "password"
}, function(err, user) {
  if(err) {
    console.log("Err creating user", err);
    return mongoose.connection.close();
  }
  
  console.log("User created!", user);

  Chapter.create({
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    optionOneText: "Salvius",
    optionTwoText: "Dominus",
    owner: user
  }, function(err, chapter) {
    if(err) {
      console.log("Err creating chapter", err);
      return mongoose.connection.close();
    }

    console.log("Chapter created!", chapter);
    return mongoose.connection.close();
  });
});