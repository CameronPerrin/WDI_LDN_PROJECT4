angular
  .module('Choosite')
  .controller("ChaptersEditController", ChaptersEditController);

ChaptersEditController.$inject = ["Chapter", "$state", "Chapter"];
function ChaptersEditController(Chapter, $state, Chapter) {
  this.selected = Chapter.get($state.params);

  this.save = function() {
    Chapter.update(this.selected, function() {
      $state.go('chaptersShow', $state.params);
    });
  }
}