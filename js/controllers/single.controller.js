let SingleController = function($scope, $state, $stateParams, PostService) {
  
  PostService.getPost($stateParams.postId).then( (res) => {
    $scope.singlePost = res.data;
  });

  $scope.deleteMe = function (obj) {
    PostService.delete(obj).then( (res) => {
      $state.go('root.explore');
    });
  };

};

SingleController.$inject = ['$scope', '$state', '$stateParams', 'PostService'];

export default SingleController;