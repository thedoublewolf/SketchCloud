import moment from 'moment';
import _ from 'underscore';

let ExploreController = function($scope, PostService) {

  PostService.getPosts().then( (res) => {
    $scope.posts = res.data.results;
    console.log(res);
    // _.each(res, function() {
    //   $scope.date = moment(res.data.results.createdAt).format('MMM Do YY');
    //   console.log(res.data.results.createdAt);
    // });
  });

};

ExploreController.$inject = ['$scope', 'PostService'];

export default ExploreController;