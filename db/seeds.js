var mongoose = require('mongoose');
var Chapter = require('../models/chapter');
var User = require('../models/user');

var databaseUri = require('../config/db')(process.env.NODE_ENV || 'development');
mongoose.connect(databaseUri);

Chapter.collection.drop();
User.collection.drop();

console.log("Chapters and users dropped!");

//USER Cameron Perrin ========================================================
var cameron = new User({
  username: "Cameron Perrin",
  email: "perrin.cameron@gmail.com",
  password: "password",
  passwordConfirmation: "password"
});
cameron.save(function(err, user) {
  if(err) return console.log(err);
  console.log(user.username, "created");
  mongoose.connection.close();
});
//============================================================================


var chapter1_1_1_2 = new Chapter({
  buttonText: "ask them who they are",
  content: "They introduce themselves left to right. The tallest tan one with blond hair introduces himslef as Ed. The tall curly haired one introduces himself as Jeremy. The shorter one with long red hair introduces her self as Bex. BEfore you can say anything a fourth person steps from the shadows and introduces himslef as Shu. He has short black hair and thin glasses. 'We are zombie hunters welcome Kobus', explains Shu. 'How does he know my name!', you think.",
  topLevel: false,
  optionOneText: "Ask them for their help",
  optionTwoText: "Find a way to escape",
  owner: cameron
})
chapter1_1_1_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});


var chapter1_1_1_1 = new Chapter({
  buttonText: "Prepare to fight",
  content: "You punch the first one in your sight and run through the back door of their building.",
  topLevel: false,
  optionOneText: "Get out of town",
  optionTwoText: "Hide in an Alley",
  owner: cameron
})
chapter1_1_1_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});


var chapter1_1_1 = new Chapter({
  buttonText: "keep walking",
  content: "You try to ignore the people staring at you but more and more people look at you the longer you stay. Some have started to follow you. They don't seem dangerous but it's a strange feeling. Suddenly, You are grabbed by your shirt and quickly pulled into an inn. you fall into the inn and three people including the one who pulled you in are stand around you, staring.",
  topLevel: false,
  seeding: true,
  optionOneText: chapter1_1_1_1.buttonText,
  optionTwoText: chapter1_1_1_2.buttonText,
  options: [
    chapter1_1_1_1,
    chapter1_1_1_2
  ],
  owner: cameron
})
chapter1_1_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_1_2_2 = new Chapter({
  buttonText: "go peacefully",
  content: "They grab you by your arms and you willingly walk with them. They bring to a large palace made of what looks like sandstone. The entrance room is alrge and filled with many doors. The guards take you through on of these dooors. There is a man waiting on the other side sitting in a highchair behind a  booth. He has on a uniform that makes him look like he is in a marching band. One of the guards says, 'This man was caught making a scene.' The other guard explains, 'He was yelling and shouting at citizens.' The figure behind the booth asks, 'is he wounded?' You look down to see a large blood stain on your torso. 'No', the guard explains. the figure gestures for them to move you away and says, 'give him 4 days in jail, if he has friends they will come get him.' Before you can respond the guards move out the door and into another. This room is a long hallway with cells on either side as far as the eye can see. you hear distant screams.",
  topLevel: false,
  optionOneText: "Fight their attempt to jail you",
  optionTwoText: "Accept your fate and let them take you to your cell",
  owner: cameron
})
chapter1_1_2_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});


var chapter1_1_2_1 = new Chapter({
  buttonText: "resist their attempt to grab you",
  content: "You put up your fists but they hit you before you can throw your first punch. Everything goes black. You wake up in a jail cell. You notice your shirt is stained with blood.",
  topLevel: false,
  optionOneText: "Search for  something usefull",
  optionTwoText: "Try and talk to one of the neighboring cells",
  owner: cameron
})
chapter1_1_2_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_1_2 = new Chapter({
  buttonText: "Shout at the people",
  content: "People move away quickly in fear of you. You feel empowered. That is until two guards rush up to stop you. They stand tall with armor similar that of the ones you saw on the bones. The crest on their chest pieces are bright blue with a dark blue 'A' in the center. They don't look happy. the taller one on your right says, 'Alright, you're coming with me let's go'. He reaches for your arm.",
  topLevel: false,
  seeding: true,
  optionOneText: chapter1_1_2_1.buttonText,
  optionTwoText: chapter1_1_2_2.buttonText,
  options: [
    chapter1_1_2_1,
    chapter1_1_2_2
  ],
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

var chapter1_2_1_2 = new Chapter({
  buttonText: "coninue on the trail",
  content: "You continue on for a few more hours until you realize you are lost. Your stomach growls. Their is nothing but grass in either directions. Suddenly, a strange man emerges from the grass. He is mumbling about recipes and his eyes are wide. He looks directly at you and for a brief second you both stand in complete silence. He shouts, 'I am AXEL, king of strange food! who might you be?'",
  topLevel: false,
  optionOneText: "Give him your name",
  optionTwoText: "Run",
  owner: cameron
})
chapter1_2_1_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_1_1 = new Chapter({
  buttonText: "search the cottage",
  content: "You rummage through the cottage and find an old musket with some lead bullets. 'what year is it?', you think yourself. An old man emerges from the shadows. He is short and frail. He uses a cane to walk towards you.",
  topLevel: false,
  optionOneText: "Shoot him!",
  optionTwoText: "See what he has to say",
  owner: cameron
})
chapter1_2_1_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_1 = new Chapter({
  buttonText: "Follow the trail",
  content: "The trail goes on for miles. It gets smaller and smaller the farther you go. You follow it until through the night and reach a small abonded cottage.",
  topLevel: false,
  optionOneText: chapter1_2_1_1.buttonText,
  optionTwoText: chapter1_2_1_2.buttonText,
  seeding: true,
  options: [
    chapter1_2_1_1,
    chapter1_2_1_2
  ],
  owner: cameron
})
chapter1_2_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_2_2 = new Chapter({
  buttonText: "Grab a sword",
  content: "You grab a sword and attack the four men head on. They are experienced at fighting and swiftly cut you down. You are dead.",
  topLevel: false,
  endGame: true,
  owner: cameron
})
chapter1_2_2_2.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_2_1 = new Chapter({
  buttonText: "Hide behind the trees",
  content: "Four fully armored men stroll by. They are all fully armored, but the armor they wear is nothing like that of the corpses. The armor they wear is very thick and heavy. It is mostly made of leather but has bits and pieces of scrap metal on it. The men patrolling the area pass you and you are unnoticed.",
  topLevel: false,
  optionOneText: "Pick up a sword and attack them by suprise",
  optionTwoText: "Follow them",
  owner: cameron
})
chapter1_2_2_1.save(function(err, chapter) {
  if(err) return console.log(err);
  console.log(chapter.buttonText, "created");
});

var chapter1_2_2 = new Chapter({
  buttonText: "Investigate the bones",
  content: "The bones are all human. Most of the carcasses are wearing a blue-ish, rusted, and damaged plated armor. You look closer but you can't quite make out what they are made of. Suddenly, you hear heavy footsteps in the distance",
  topLevel: false,
  optionOneText: chapter1_2_2_1.buttonText,
  optionTwoText: chapter1_2_2_2.buttonText,
  seeding: true,
  options: [
    chapter1_2_2_1,
    chapter1_2_2_2
  ],
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
  content: "You wake up in a dark forest unsure of where or who you are. all you rememebr is your name Kobus. You have no memories of your past. To the north you can see a dim light breaking through the thick forest trees.",
  topLevel: true,
  optionOneText: chapter1_1.buttonText,
  optionTwoText: chapter1_2.buttonText,
  image: "https://s3-eu-west-1.amazonaws.com/arkea/04a1e9c0-7a93-11e6-841c-39757e3a64b6.jpg",
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
