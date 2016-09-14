angular
  .module('Choosite')
  .controller("ChaptersShowController", ChaptersShowController);

ChaptersShowController.$inject = ["Chapter", "$state", "TokenService"];
function ChaptersShowController(Chapter, $state, TokenService) {
  this.selected = Chapter.get($state.params);

  // this.pageClass = 'chapter-show-page'
  
  this.delete = function() {
    this.selected.$delete(function() {
      $state.go("chaptersIndex");
    });
  }


  this.currentUser = TokenService.decodeToken();

  this.whoOwns = function whoOwns() {
    if(this.currentUser === null){
      return false;
    } else if(this.currentUser.username === "Slowly Smiles") {
      return true;
    } else if(this.currentUser._id === this.selected.owner._id) {
      return true;
    } else {
      return false;
    }
  }

  // this.optionOne = Chapter.get($stateparams);
}