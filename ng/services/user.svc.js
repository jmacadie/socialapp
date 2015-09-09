angular.module('app')
.factory('UserSvc', function($http, $q, SessionStorageSvc) {
  function getUser() {
    if ($http.defaults.headers.common['X-Auth']) {
      return $http.get('/api/users?rnd=' + new Date().getTime())
    } else {
      var deferred = $q.defer()
      deferred.resolve('')
      return deferred.promise
    }
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
      SessionStorageSvc.set('token', val.data)
      $http.defaults.headers.common['X-Auth'] = val.data
      return getUser()
    })
  }

  function logout() {
    delete $http.defaults.headers.common['X-Auth']
    SessionStorageSvc.set('token', null)
  }

  function init() {
    if (!$http.defaults.headers.common['X-Auth'] &&
        SessionStorageSvc.get('token')) {
      $http.defaults.headers.common['X-Auth'] =
        SessionStorageSvc.get('token')
    }
  }

  init()

  return {
    getUser: getUser,
    createUser: createUser,
    login: login,
    logout: logout,
  }
})
