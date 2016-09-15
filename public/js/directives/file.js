angular
  .module('Choosite')
  .directive('file', file);

function file() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {
      console.log(scope.file)
      element.on('change', function(e) {
        console.log(e.target.files[0]);
        ngModel.$setViewValue(e.target.files[0]);
      });
    }
  }
}