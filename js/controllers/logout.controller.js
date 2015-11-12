let LogOutController = function($scope, $http, $state, PARSE, $rootScope) {
  
  $rootScope.currentUser = PARSE.User.current();

  $scope.logout = function() {
    $rootScope.currentUser = null;
    PARSE.User.logOut();
  };

};

LogOutController.$inject = ['$scope', '$http', '$state', 'PARSE', '$rootScope'];

export default LogOutController;
