angular
  .module('Choosite')
  .controller("ChaptersIndexController", ChaptersIndexController);

ChaptersIndexController.$inject = ["Chapter"];
function ChaptersIndexController(Chapter) {
  this.all = Chapter.query();

  // this.search = function(){
  //   var input = getElementById('search-stories');
  //   console.log(input);
    // $items.each(function() {
    //   var userInput = $(this).text().toLowerCase()
    //   var itemTitle = $(input).val().toLowerCase()


    //   if(userInput.match(itemTitle)){
    //     $(this).show()
    //   } else {
    //     $(this).hide()
    //   }
    // })
  // }


  
  // searchStories.$inject = ["$http"];
  // this.searchStories = function($http) {
  //   return {
  //     search: function(keywords){
  //       return $http.post('/api/chapters', { "content" : keywords });
  //     }
  //   }
  // }

  // this.searchRun = function(){
  //   this.searchStories.search(this.keywords).then(function(response){
  //     this.response = response.data;
  //   });
  // };

}