var Chapter = require('../models/chapter');

function chaptersIndex(req, res) {
  Chapter.find(function(err, chapters) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(chapters);
  });
}

function chaptersCreate(req, res) {
  
  req.body.owner = req.user._id;
  
  Chapter.create(req.body, function(err, chapter) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(chapter);
  });
}

function chaptersShow(req, res) {
  Chapter.findById(req.params.id).populate('options').exec(function(err, chapter) {
    if(err) return res.status(500).json(err);
    if(!chapter) return res.status(404).json({ message: "Could not find a chapter with that id" });
    return res.status(200).json(chapter);
  });
}

function chaptersUpdate(req, res) {
  Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, chapter) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(chapter);
  });
}

function chaptersDelete(req, res) {
  Chapter.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  index: chaptersIndex,
  create: chaptersCreate,
  show: chaptersShow,
  update: chaptersUpdate,
  delete: chaptersDelete
}