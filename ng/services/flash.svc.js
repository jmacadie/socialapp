angular.module('app')
.factory('FlashSvc', function($rootScope) {

  var queue = []
  var currentMessage = ''

  $rootScope.$on('$routeChangeSuccess', function() {
    currentMessage = queue.shift() || ''
  })

  return {
    setMessage: function(type, title, body) {
      queue.push({
        alertType: type,
        title: title,
        body: body,
      })
    },

    getMessage: function() {
      return currentMessage
    },
  }
})
