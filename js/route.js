politiciansApp.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/index', {
                templateUrl: 'views/index.html'
          }).
          when('/politicos', {
                templateUrl: 'views/politician_list.html',
                controller : 'PoliticianListController'
          }).
          when('/politicos/:itemId', {
                templateUrl: 'views/politician_details.html',
                controller : 'PoliticianDetailsController'
          }).
          when('/leis', {
                templateUrl: 'views/laws_list.html',
                controller : 'LawListController'
          }).
          when('/leis/:itemId', {
                templateUrl: 'views/laws_details.html',
                controller : 'LawDetailsController'
          }).
          otherwise({
                redirectTo: '/index'
          });
}]);