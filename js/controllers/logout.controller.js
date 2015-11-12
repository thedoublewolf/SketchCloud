let LogOutController = function($scope, $http, $location, PARSE, $rootScope) {
  
  $rootScope.currentUser = PARSE.User.current();

  $scope.logout = function() {
    $rootScope.currentUser = null;
    PARSE.User.logOut();
  };

};

LogOutController.$inject = ['$scope', '$http', '$location', 'PARSE', '$rootScope'];

export default LogOutController;
