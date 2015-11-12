let UploadController = function($scope, $state, PostService) {

  $scope.addPost = (obj) => {
    PostService.addPost(obj).then( (res) => {
      $scope.post = {};
    });
    $state.go('root.explore');
  };

};

UploadController.$inject = ['$scope', '$state', 'PostService'];

export default UploadController;