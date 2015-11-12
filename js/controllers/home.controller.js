let HomeController = function($scope, $state) {
  
  $scope.title = 'Share. Critique. Inspire.';

  $scope.go = function (path) {
    $state.go(path);
  };

};

HomeController.$inject = ['$scope', '$state'];

export default HomeController;