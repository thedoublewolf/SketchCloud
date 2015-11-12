let SignInController = function($scope, $http, $state, PARSE, $rootScope) {
  
  let url = PARSE.URL + 'login';

  let Login = function (form) {
    this.username = form.username;
    this.password = form.password;
  };

  $rootScope.loggedIn = function() {
    if ($rootScope.currentUser === null) {
      return false;
    } else {
      return true;
    }
  };

  $scope.logout = function() {
    $rootScope.currentUser = null;
    PARSE.User.logOut();
  };

  // if ($rootScope.loggedIn() === true) {
  //   $location.path('/user');
  // }

  function loginSuccessful(user) {
    $rootScope.$apply(function() {
      $rootScope.currentUser = PARSE.User.Current(user);
      $state.go('root.user');
    });
  }

  function loginUnsuccessful(user, error) {
    alert('Try Again');
  }

  $scope.loginUser = function (form) {
    let l = new Login(form);
    PARSE.User.loginUser(form.l, {
      success: loginSuccessful,
      error: loginUnsuccessful
    });
  };

};

SignInController.$inject = ['$scope', '$http', '$state', 'PARSE', '$rootScope'];

export default SignInController;