angular
  .module('Choosite')
  .factory('Chapter', Chapter)
  .service('formData', formData);

  function formData() {
    return {
      transform: function(data) {
        var formData = new FormData();
        angular.forEach(data, function(value, key) {
          if(value._id) value = value._id;
          if(!key.match(/^\$/)) formData.append(key, value);
        });

        return formData;
      }
    }
  }

Chapter.$inject = ["$resource", "API_URL", "formData"];
function Chapter($resource, API_URL, formData) {
  return $resource(API_URL + "/chapters/:id", { id: '@_id' }, {
    update: { 
      method: "PUT",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform
    },
    save: {
      method: "POST",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform
    }
  });
}