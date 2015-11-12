let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.explore', {
      url: '/explore',
      controller: 'ExploreController',
      templateUrl: 'templates/explore.tpl.html'
    })
    .state('root.single', {
      url: '/single/:postId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.signin', {
      url: '/signin',
      controller: 'SignInController',
      templateUrl: 'templates/signin.tpl.html'
    })
    .state('root.logout', {
      url: '/logout',
      controller: 'SignInController',
      templateUrl: 'templates/logout.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      controller: 'RegisterController',
      templateUrl: 'templates/register.tpl.html'
    })
    .state('root.upload', {
      url: '/upload',
      controller: 'UploadController',
      templateUrl: 'templates/upload.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:postId',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })
    .state('root.user', {
      url: '/user',
      controller: 'UserController',
      templateUrl: 'templates/user.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;