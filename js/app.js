var politiciansApp = angular.module('myApp', [
      'ngRoute',
      'ui.bootstrap',
      'ezfb',
      'politicianControllers',
      'lawControllers',
      'carouselController'
]);

politiciansApp.filter('markdown', function ($sce) {
  var converter = new Showdown.converter();
  return function (value) {
    var html = converter.makeHtml(value || '');
    return $sce.trustAsHtml(html);
  };
});

politiciansApp.config(function (ezfbProvider) {
  ezfbProvider.setInitParams({
    appId: '395736887160072'
  });
});
