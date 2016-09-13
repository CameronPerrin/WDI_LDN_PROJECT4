angular
  .module('Choosite')
  .factory('Chapter', Chapter);

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