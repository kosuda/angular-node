var app = angular.module('app', [
  'ui.router',
  'directives.navbar'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:'/',
    template: '<h1>hello world</h1>'
  });
});

