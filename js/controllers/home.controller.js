let HomeController = function($scope, $location) {
  
  $scope.title = 'Share. Critique. Inspire.';

  $scope.go = function (path) {
    $location.path(path);
  };

};

HomeController.$inject = ['$scope', '$location'];

export default HomeController;