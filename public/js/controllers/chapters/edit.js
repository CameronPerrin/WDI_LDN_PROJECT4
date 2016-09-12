angular
  .module('Choosite')
  .controller("ChaptersEditController", ChaptersEditController);

ChaptersEditController.$inject = ["Chapter", "$state", "Chapter", "TokenService"];
function ChaptersEditController(Chapter, $state, Chapter, TokenService) {

  this.selected = Chapter.get($state.params);
  console.log(this.selected);
  
  this.save = function() {
    this.user = TokenService.decodeToken();
    this.userId = this.user._id;
    this.selected.owner = this.userId;
    Chapter.update(this.selected, function() {
      $state.go('chaptersShow', $state.params);
    });
  }
}