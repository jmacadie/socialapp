angular.module('app')
.factory('UserSvc', function($http) {
  function getUser() {
    return $http.get('/api/users')
  }

  function createUser(username, password) {
    return $http.post('/api/users', {
      username: username,
      password: password,
    })
    .then(function() {
      return login(username, password)
    })
  }

  function login(username, password) {
    return $http.post('/api/sessions', {
      username: username,
      password: password,
    })
    .then(function(val) {
      $http.defaults.headers.common['X-Auth'] = val.data
      return getUser()
    })
  }

  function logout() {
    delete $http.defaults.headers.common['X-Auth']
  }

  return {
    getUser: getUser,
    createUser: createUser,
    login: login,
    logout: logout,
  }
})
