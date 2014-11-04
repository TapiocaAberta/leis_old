politiciansApp.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/index', {
                templateUrl: 'views/base/index.html'
          }).
          when('/politicos', {
                templateUrl: 'views/politician/politician_list.html',
                controller : 'PoliticianListController'
          }).
          when('/politicos/:itemId', {
                templateUrl: 'views/politician/politician_details.html',
                controller : 'PoliticianDetailsController'
          }).
          when('/leis', {
                templateUrl: 'views/laws/laws_list.html',
                controller : 'LawListController'
          }).
          when('/leis/:itemId', {
                templateUrl: 'views/laws/laws_details.html',
                controller : 'LawDetailsController'
          }).
          otherwise({
                redirectTo: '/index'
          });
}]);