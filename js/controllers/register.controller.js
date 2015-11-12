let RegisterController = function($scope, $http, PARSE, $rootScope, $location) {
  
  let url = PARSE.URL + 'users';

  let User = function (form) {
    this.fullname = form.fullname;
    this.username = form.username;
    this.email = form.email;
    this.password = form.password;
  };

  $scope.register = function (form) {
    let u = new User(form);
    $http.post(url, u, PARSE.CONFIG).then( (res) => {
      $scope.user = {};
      $location.path('/user');
    });
  };

};

RegisterController.$inject = ['$scope', '$http', 'PARSE', '$rootScope', '$location'];

export default RegisterController;