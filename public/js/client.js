angular
  .module('Choosite', ["ngResource", "ui.router", "angular-jwt"])
  .constant("API_URL", "/api")
  .config(setupInterceptor)
  .config(Router);

setupInterceptor.$inject = ["$httpProvider"];
function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
}

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/authentications/login.html',
      controller: "LoginController as login"
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/authentications/register.html',
      controller: "RegisterController as register"
    })
    .state("chaptersIndex", {
      url: "/chapters",
      templateUrl: "/templates/chapters/index.html",
      controller: "ChaptersIndexController as chaptersIndex"
    })
    .state("chaptersNew", {
      url: "/chapters/new",
      templateUrl: "/templates/chapters/new.html",
      controller: "ChaptersNewController as chaptersNew"
    })
    .state("chaptersShow", {
      url: "/chapters/:id",
      templateUrl: "/templates/chapters/show.html",
      controller: "ChaptersShowController as chaptersShow"
    })
    .state("chaptersEdit", {
      url: "/chapters/:id/edit",
      templateUrl: "/templates/chapters/edit.html",
      controller: "ChaptersEditController as chaptersEdit"
    });

  $urlRouterProvider.otherwise("/");

}