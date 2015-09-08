angular.module('app')
.service('UserSvc', function($http) {
  var _this = this

  _this.getUser = function() {
    return $http.get('/api/users', {
      headers: { 'X-Auth': this.token },
    })
  }

  _this.createUser = function(username, password) {
    return $http.post('/api/users', {
      username: username,
      password: password,
    })
    .then(function() {
      return _this.login(username, password)
    })
  }

  _this.login = function(username, password) {
    return $http.post('/api/sessions', {
      username: username,
      password: password,
    })
    .then(function(val) {
      _this.token = val.data
      $http.defaults.headers.common['X-Auth'] = val.data
      return _this.getUser()
    })
  }
})
