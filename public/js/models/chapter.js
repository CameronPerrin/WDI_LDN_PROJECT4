angular
  .module('Choosite')
  .factory('Chapter', Chapter);

Chapter.$inject = ["$resource", "API_URL"];
function Chapter($resource, API_URL) {
  return $resource(API_URL + "/chapters/:id", { id: '@_id' }, {
    update: { method: "PUT" }
  });
}