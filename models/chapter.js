var mongoose = require('mongoose');
var s3 = require('../config/s3');

var chapterSchema = new mongoose.Schema({
  content: { type: String },
  image: { type: String },
  options: [{ type: mongoose.Schema.ObjectId, ref: "Chapter" }],
  buttonText: { type: String },
  topLevel: { type: Boolean, default: true },
  endGame: { type: Boolean, default: false },
  seeding: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: "User" }
});

chapterSchema.path('image')
  .get(function(image) {
    if(image) return s3.endpoint.href + process.env.AWS_BUCKET_NAME + "/" + image;
    return null;
  })
  .set(function(image) {
    return image.split('/').splice(-1)[0];
  });

chapterSchema.virtual('optionOneText')
  .set(function(text) {
    this._optionOneText = text;
  });

chapterSchema.virtual('optionTwoText')
  .set(function(text) {
    this._optionTwoText = text;
  });

chapterSchema.pre('save', function(next) {
  if(this.seeding) return next();

  var doc = this;

  if(this.options.length > 0) return next();

  if(!this.content && !this.owner){
    this.topLevel = false;
    return next();
  }

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

chapterSchema.set('toJSON', { getters: true });

module.exports = mongoose.model("Chapter", chapterSchema);