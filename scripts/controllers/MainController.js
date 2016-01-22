app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Angular Fun';

  $scope.products = [
    {
      animal: 'Bun',
      color: 'yellow',
      background: 'green',
      value: 20,
      img: 'img/bun.png'
    },
    {
      animal: 'Pig',
      color: 'pink',
      background: 'blue',
      value: 10,
      img: 'img/pig.png'
    },
    {
      animal: 'Bear',
      color: 'white',
      background: 'red',
      value: 25,
      img: 'img/bear.png'
    },
    {
      animal: 'Bun',
      color: 'yellow',
      background: 'green',
      value: 20,
      img: 'img/bun.png'
    },
    {
      animal: 'Pig',
      color: 'pink',
      background: 'blue',
      value: 10,
      img: 'img/pig.png'
    },
    {
      animal: 'Bear',
      color: 'white',
      background: 'red',
      value: 25,
      img: 'img/bear.png'
    }
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  };
}]);