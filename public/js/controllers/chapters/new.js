angular
  .module('Choosite')
  .controller("ChaptersNewController", ChaptersNewController);

ChaptersNewController.$inject = ["Chapter", "$state"];
function ChaptersNewController(Chapter, $state) {
  this.new = {};

  this.create = function() {
    Chapter.save(this.new, function() {
      $state.go('chaptersIndex');
    });
  }
}