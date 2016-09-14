var Chapter = require('../models/chapter');

function chaptersIndex(req, res) {
  Chapter.find()
    .then(function(chapters) {
      return res.status(200).json(chapters);
    })
    .catch(function(err) {
      return res.status(500).json(err);
    });
}

function chaptersCreate(req, res) {
  
  req.body.owner = req.user._id;

  if(req.file) req.body.image = req.file.key;
  
  Chapter.create(req.body)
    .then(function(chapter) {
      return res.status(201).json(chapter);
    })
    .catch(function(err) {
      return res.status(400).json(err);
    })
}

function chaptersShow(req, res) {
  Chapter.findById(req.params.id)
    .populate('options')
    .populate('owner')
    .then(function(chapter) {
      if(!chapter) return res.status(404).json({ message: "Could not find a chapter with that id" });
      return res.status(200).json(chapter);
    })
    .catch(function(err) {
      return res.status(500).json(err);
    })
}

function chaptersUpdate(req, res) {

  if(req.file) req.body.image = req.file.key;

  Chapter.findById(req.params.id)
    .then(function(chapter) {
      for(key in req.body) chapter[key] = req.body[key];
      return chapter.save();
    })
    .then(function(chapter) {
      return res.status(200).json(chapter);
    })
    .catch(function(err) {
      console.log(err);
      return res.status(500).json(err);
    });
}

function chaptersDelete(req, res) {
  Chapter.findById(req.params.id)
    .then(function(chapter) {
      // req.params.content
      return chapter.remove();
    })
    .then(function() {
      return res.status(204).send();
    })
    .catch(function(err) {
      return res.status(500).json(err);
    });
}

module.exports = {
  index: chaptersIndex,
  create: chaptersCreate,
  show: chaptersShow,
  update: chaptersUpdate,
  delete: chaptersDelete
}