let PostService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/post';

  this.getPosts = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getPost = function (postId) {
    return $http({
      method: 'GET',
      url: url + '/' + postId,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  let Post = function (obj) {
    this.title = obj.title;
    this.image = obj.image;
    this.description = obj.description;
  };

  this.addPost = function (obj) {
    let p = new Post(obj);
    return $http.post(url, p, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.delete(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

PostService.$inject = ['$http', 'PARSE'];

export default PostService;