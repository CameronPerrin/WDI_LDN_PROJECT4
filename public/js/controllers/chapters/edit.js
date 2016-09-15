angular
  .module('Choosite')
  .controller("ChaptersEditController", ChaptersEditController);

ChaptersEditController.$inject = ["Chapter", "$state", "Chapter", "TokenService"];
function ChaptersEditController(Chapter, $state, Chapter, TokenService) {

  this.selected = Chapter.get($state.params);

  this.cancel = function() {
    window.history.back();
  }
  
  // this.pageClass = 'chapter-edit-page'

  this.save = function() {

    this.user = TokenService.decodeToken();
    if(this.user === null){
      return $state.go('register', $state.params);
    } 
    this.userId = this.user._id;
    this.selected.owner = this.userId;

    delete this.selected.options;

    Chapter.update(this.selected, function() {
      $state.go('chaptersShow', $state.params);
    });
  }
}