angular.module('app')
.controller('ApplicationCtrl', function($scope, $location, FlashSvc) {
  $scope.flash = FlashSvc

  function processLogIn(user, type, title, message) {
    $scope.currentUser = user
    FlashSvc.setMessage(type, title, message)
    $location.path('/')
  }

  $scope.$on('login', function(_, user) {
    processLogIn(user,
                 'alert-info',
                 '',
                 'Welcome back')
  })

  $scope.$on('register', function(_, user) {
    processLogIn(user,
                 'alert-success',
                 'Registered',
                 'You\'ve successfully registered as a new user')
  })
})
