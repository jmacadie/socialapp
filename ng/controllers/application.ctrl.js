angular.module('app')
.controller('ApplicationCtrl', function($scope, $location, FlashSvc, UserSvc) {
  $scope.flash = FlashSvc

  function setUserMsg(user) {
    $scope.currentUser = user
    $scope.signedInMsg = 'Signed in as ' + user.username
  }

  UserSvc.getUser()
  .then(function(response) {
    setUserMsg(response.data)
  })

  function processLogIn(user, type, title, message) {
    setUserMsg(user)
    FlashSvc.setMessage(type, title, message)
    if ($location.path() === '/') {
      $scope.$emit('$routeChangeSuccess')
    } else {
      $location.path('/')
    }
  }

  $scope.$on('login', function(_, user) {
    processLogIn(user,
                 'info',
                 '',
                 'Welcome back')
  })

  $scope.$on('register', function(_, user) {
    processLogIn(user,
                 'success',
                 'Registered',
                 'You\'ve successfully registered as a new user')
  })

  $scope.logout = function() {
    UserSvc.logout()
    processLogIn('',
                 'info',
                 '',
                 'Logged out')
  }
})
