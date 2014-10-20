var politiciansApp = angular.module('myApp', [
      'ngRoute',
      'politicianControllers',
      'lawControllers'
]);

politiciansApp.filter('markdown', function ($sce) {
    var converter = new Showdown.converter();
    return function (value) {
		var html = converter.makeHtml(value || '');
        return $sce.trustAsHtml(html);
    };
});