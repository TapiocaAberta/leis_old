var carouselController = angular.module('carouselController', ['ui.bootstrap']);

carouselController.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
      var slides = [
            {
                  title: "Monitor Legislativo",
                  description: "Acompanhe de perto todos os projetos de lei criados pelos vereadores de São José dos Campos",
                  image: ""
            },
            {
                  title: "Dados Abertos e Inovação",
                  description: "Conheça nosso movimento e descubra o porque um grupo de nerds resolveram unir tecnologia da informação com dados governamentais.",
                  image: "",
            }
      ]

      $scope.myInterval = 5000;
      $scope.slides = slides;
}]);