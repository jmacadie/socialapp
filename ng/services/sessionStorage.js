angular.module('app')
.factory('SessionStorageSvc', function($window) {
  return {
    set: function(name, value) {
      if (value === null) {
        $window.sessionStorage.removeItem(name)
      } else {
        $window.sessionStorage[name] = JSON.stringify(value)
      }
    },

    get: function(name) {
      if ($window.sessionStorage[name]) {
        return JSON.parse($window.sessionStorage[name])
      } else {
        return ''
      }
    },
  }
})
