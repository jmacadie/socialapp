angular.module('app')
.factory('PostsSvc', function($http) {
  return {
    fetch: function() {
      return $http.get('/api/posts')
    },

    create: function(post) {
      return $http.post('/api/posts', post)
    },
  }
})
