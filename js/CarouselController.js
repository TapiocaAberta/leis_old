var carouselController = angular.module('carouselController', ['ui.bootstrap']);

carouselController.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
      var slides = [
            {
                  title: "Projetos de lei",
                  description: "Quantos projetos de lei os vereadores fizeram durante determinado período? Quantos desses projetos foram nomes de rua e/ou datas comemorativas? Quais projetos tiveram relevância na sociedade? <br/><br/>Estas são agumas perguntas que pretendemos responder com o monitor legislativo de São José dos Campos",
                  image: ""
            },
            {
                  title: "Dados Abertos e Inovação",
                  description: "Conheça nosso movimento e descubra o porque um grupo de nerds resolveram unir tecnologia da informação com dados governamentais.",
                  image: "img/logo-transparencia-sjc.svg",
            }
      ]

      $scope.myInterval = 5000;
      $scope.slides = slides;
}]);