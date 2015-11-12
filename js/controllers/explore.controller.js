let ExploreController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/post';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.posts = res.data.results;
  });

};

ExploreController.$inject = ['$scope', '$http', 'PARSE'];

export default ExploreController;