angular.module('directives.navbar', [])

.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/navbar.html',
    controller: function($scope) {
      $scope.$on('$stateChangeSuccess', function(event, toState) {
        var currentPage = toState.name.split('.');
        $scope.currentPage = currentPage[0] || '';
      });
    }
  };
});

