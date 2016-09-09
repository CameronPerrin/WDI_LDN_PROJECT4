angular
  .module('Choosite', ["ngResource", "ui.router", "angular-jwt"])
  .constant("API_URL", "http://localhost:3000/api")
  .config(setupInterceptor)
  .config(Router);

setupInterceptor.$inject = ["$httpProvider"];
function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
}

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/home.html"
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
    });

  $urlRouterProvider.otherwise("/");

}