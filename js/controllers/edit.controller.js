let EditController = function($scope, $stateParams, PostService) {
  
  PostService.getPost($stateParams.postId).then( (res) => {
    $scope.singlePost = res.data;
  });

  $scope.updatePost = function (obj) {
    PostService.update(obj).then( (res) => {
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'PostService'];

export default EditController;