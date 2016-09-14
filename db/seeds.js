var mongoose = require('mongoose');
var Chapter = require('../models/chapter');
var User = require('../models/user');

var databaseUri = require('../config/db')(process.env.NODE_ENV || 'development');
mongoose.connect(databaseUri);

Chapter.collection.drop();
User.collection.drop();

console.log("Chapters and users dropped!");

//USER CAMERON ==============================================================
var cameron = new User({
  username: "Cameron Perrin",
  email: "perrin.cameron@gmail.com.com",
  password: "password",
  passwordConfirmation: "password"
});
cameron.save(function(err, user) {
  if(err) return console.log(err);
  console.log(user.username, "created");
  mongoose.connection.close();
});


var chapter1_1_1 = new Chapter({
  buttonText: "keep walking",
  content: "You try to ignore the people staring at you but more and more people look at you the longer you stay. Some have started to follow you. They don't seem dangerous but it's a strange feeling. Suddenly, You are grabbed by your shirt and quickly pulled into an inn. you fall into the inn and four people including the one who pulled you in are stand around you, staring.",
  topLevel: false,
  optionOneText: "prepare to fight",
  optionTwoText: "ask them who they are",
  owner: cameron
})
chapter1_1_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_1_2 = new Chapter({
  buttonText: "Shout at the people",
  content: "People move away quickly in fear of you. You feel empowered. That is until the guards rush up to stop you. They stand tall with armor similar that of the ones you saw on the bones. The crest on their chest pieces are bright blue with a dark blue 'A' in the center. They don't look happy. the taller one on your right says, 'Alright, you're coming with me lets go'. He reaches for your arm.",
  topLevel: false,
  optionOneText: "resist their attempt to grab you",
  optionTwoText: "go peacefully",
  owner: cameron
})
chapter1_1_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});


var chapter1_1 = new Chapter({
  buttonText: "Investigate the light",
  content: "You walk to the light for what seems like ages. As you near you can see it's a town. As you walk up to an area that looks the market district. You don't realize until you get into the thick of it all that people are staring at you.",
  topLevel: false,
  optionOneText: chapter1_1_1.buttonText,
  optionTwoText: chapter1_1_2.buttonText,
  seeding: true,
  options: [
    chapter1_1_1,
    chapter1_1_2
  ],
  owner: cameron
})
chapter1_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_1 = new Chapter({
  buttonText: "Follow the trail",
  content: "The trail goes on for miles. You follow it until through the night and reach a small abonded cottage.",
  topLevel: false,
  optionOneText: "search the cottage",
  optionTwoText: "coninue on the trail",
  owner: cameron
})
chapter1_2_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_2 = new Chapter({
  buttonText: "Investigate the bones",
  content: "The bones are all human. Most of the carcasses are wearing a blue-ish, rusted, and damaged plated armor. You look closer but you can't quite make out waht they are made of. Suddenly, you hear heavy footsteps in the distance",
  topLevel: false,
  optionOneText: "Hide behind the trees",
  optionTwoText: "Pick up a sword",
  owner: cameron
})
chapter1_2_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});
  
var chapter1_2 = new Chapter({
  buttonText: "Search the area.",
  content: "You search for what seems like a frustratingly long time. You find bones and armor scattered about in the distance and a trail. The bones appear to be human and the trial looks endless.",
  topLevel: false,
  optionOneText: chapter1_2_1.buttonText,
  optionTwoText: chapter1_2_2.buttonText,
  seeding: true,
  options: [
    chapter1_2_1,
    chapter1_2_2
  ],
  owner: cameron
})
chapter1_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});
    

var chapter1 = new Chapter({
  content: "You wake up in a dark forest unsure of where you are. You have no memories of your past. To the north you can see a dim light breaking through the thick forest trees.",
  topLevel: true,
  optionOneText: chapter1_1.buttonText,
  optionTwoText: chapter1_2.buttonText,
  seeding: true,
  owner: cameron,
  options: [
    chapter1_1,
    chapter1_2
  ]
});
chapter1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.content, "created");
});
