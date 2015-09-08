angular.module('app')
.controller('ApplicationCtrl', function($scope, $location, FlashSvc) {
  $scope.flash = FlashSvc

  function processLogIn(_, user, message) {
    $scope.currentUser = user
    FlashSvc.setMessage(message)
    $location.path('/')
  }

  $scope.$on('login', function(_, user) {
    processLogIn(_, user, 'Logged in')
  })

  $scope.$on('register', function(_, user) {
    processLogIn(_, user, 'Registered')
  })
})
