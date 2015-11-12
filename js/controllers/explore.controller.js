let ExploreController = function($scope, PostService) {
  
  PostService.getPosts().then( (res) => {
    $scope.posts = res.data.results;
  });

};

ExploreController.$inject = ['$scope', 'PostService'];

export default ExploreController;