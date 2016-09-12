var mongoose = require('mongoose');

var chapterSchema = new mongoose.Schema({
  content: { type: String },
  options: [{ type: mongoose.Schema.ObjectId, ref: "Chapter" }],
  // hasContent: { type: Boolean, default: false },
  buttonText: { type: String },
  endGame: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: "User" }
});

// options: {
//   chapters: [{
//     _id: { type: mongoose.Schema.ObjectId, ref: "Chapter" }
//   }]
// },

chapterSchema.virtual('optionOneText')
  .set(function(text) {
    this._optionOneText = text;
  });

chapterSchema.virtual('optionTwoText')
  .set(function(text) {
    this._optionTwoText = text;
  });

chapterSchema.pre('save', function(next) {
  var doc = this;

  if(!this.content && !this.owner) return next();

  this.model('Chapter').create([{
    buttonText: doc._optionOneText
  },{
    buttonText: doc._optionTwoText
  }], function(err, emptyChapters) {
    if(err) {
      console.log(err);
      return next(err);
    }
    doc.options = emptyChapters;
    return next();
  });
});

module.exports = mongoose.model("Chapter", chapterSchema);