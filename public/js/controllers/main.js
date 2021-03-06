angular
  .module("Choosite")
  .controller("MainController", MainController);

MainController.$inject = ["TokenService", "$state", "$rootScope"];
function MainController(TokenService, $state, $rootScope) {

  var self = this;

  this.currentUser = TokenService.decodeToken();

  this.sesame = true;
  this.move = false;

  this.dismiss = function dismiss() {
    this.errorMessage = null;
  }

  this.hamburgerOpen = function hamburgerOpen() {
    this.sesame = !this.sesame;
    this.move = !this.move;
  }

  this.logout = function logout() {
    TokenService.clearToken();
    this.currentUser = null;
    $state.go("home");
  }

  $rootScope.$on("loggedIn", function() {
    self.currentUser = TokenService.decodeToken();
  });

  $rootScope.$on("unauthorized", function() {
    $state.go("login");
    self.errorMessage = "You must be logged in to do that!"
  });
}