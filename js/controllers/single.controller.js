import moment from 'moment';

let SingleController = function($scope, $state, $stateParams, PostService) {
  
  $scope.rate = 7;

  PostService.getPost($stateParams.postId).then( (res) => {
    $scope.singlePost = res.data;
    console.log(res);
    $scope.date = moment(res.data.createdAt).format('MMM Do YY');
    console.log(res.data.createdAt);
    if(res.data.rating) {
      $scope.rate = res.data.rating;
    }
  });

  $scope.deleteMe = function (obj) {
    PostService.delete(obj).then( (res) => {
      $state.go('root.explore');
    });
  };

  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];

  $scope.rateMe = function(singlePost) {
    console.log($scope.rate);
    PostService.rate(singlePost, $scope.rate).then ( () => {
      alert('Rating Saved');
    });
  };
};

SingleController.$inject = ['$scope', '$state', '$stateParams', 'PostService'];

export default SingleController;