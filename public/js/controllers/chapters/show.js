angular
  .module('Choosite')
  .controller("ChaptersShowController", ChaptersShowController);

ChaptersShowController.$inject = ["Chapter", "$state","TokenService"];
function ChaptersShowController(Chapter, $state, TokenService) {
  this.selected = Chapter.get($state.params);

  this.delete = function() {
    this.selected.$delete(function() {
      $state.go("chaptersIndex");
    });
  }


  this.currentUser = TokenService.decodeToken();

  this.whoOwns = function whoOwns() {
    if(this.currentUser._id === this.selected.owner){
      return true;
    } else {
      return false;
    }
  }

  // this.optionOne = Chapter.get($stateparams);
}