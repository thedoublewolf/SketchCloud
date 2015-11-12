let UploadController = function($scope, $http, PARSE, $location) {
  
  let url = PARSE.URL + 'classes/post';

  let Post = function (obj) {
    this.title = obj.title;
    this.image = obj.image;
    this.description = obj.description;
  };

  $scope.addPost = function (obj) {
    let p = new Post(obj);
    $http.post(url, p, PARSE.CONFIG).then( (res) => {
      $scope.post = {};
      $location.path = ('/explore');
    });
  };

};

UploadController.$inject = ['$scope', '$http', 'PARSE', '$location'];

export default UploadController;