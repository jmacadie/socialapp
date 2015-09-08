angular.module('app')
.controller('RegisterCtrl', function($scope, $location, UserSvc) {
  $scope.createUser = function(username, password) {
    UserSvc.createUser(username, password)
    .then(function(response) {
      $scope.$emit('register', response.data)
    })
  }
})
