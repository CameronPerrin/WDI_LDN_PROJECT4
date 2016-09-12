angular
  .module('Choosite')
  .controller("ChaptersShowController", ChaptersShowController);

ChaptersShowController.$inject = ["Chapter", "$state"];
function ChaptersShowController(Chapter, $state) {
  this.selected = Chapter.get($state.params);
  console.log(this.selected);

  this.delete = function() {
    this.selected.$delete(function() {
      $state.go("chaptersIndex");
    });
  }

  // this.optionOne = Chapter.get($stateparams);
}