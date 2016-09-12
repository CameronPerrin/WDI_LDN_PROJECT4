angular
  .module("Choosite")
  .factory("AuthInterceptor", AuthInterceptor);

AuthInterceptor.$inject = ["TokenService", "API_URL", "$rootScope"];
function AuthInterceptor(TokenService, API_URL, $rootScope) {
  return {
    request: function(config) {
      var token = TokenService.getToken();
      if(!!config.url.match(API_URL) && token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },

    response: function(res) {
      if(!!res.config.url.match(API_URL) && res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    },

    responseError: function(res) {
      if(res.status === 401){
        $rootScope.$broadcast("unauthorized");
      }
      return res.data
    }
  }
}