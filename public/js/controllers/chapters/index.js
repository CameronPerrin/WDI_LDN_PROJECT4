angular
  .module('Choosite')
  .controller("ChaptersIndexController", ChaptersIndexController);

ChaptersIndexController.$inject = ["Chapter"];
function ChaptersIndexController(Chapter) {
  this.all = Chapter.query();
}