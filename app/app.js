var app = angular.module('app', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:'/',
    template: '<h1>hello world</h1>'
  });
});

