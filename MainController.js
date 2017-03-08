pp.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Margarita',
      description: 'Marinara sauce, mozzarella, fresh basil.',
      price: 6.95
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni, marinara sauce, mozzarella, fresh oregano.',
      price: 7.95
    },
    {
      name: 'Hawaiian',
      description: 'Marinara sauce, pineapple slices, canadian bacon, fresh oregano.',
      price: 8.95
    }
  ];
   $scope.extras = [
    {
      name: 'Sliders',
      description: 'Served with marinara sauce.',
      price: 4.95
    },
    {
      name: 'Soup of the day',
      description: 'Tomato Bisque.',
      price: 4.95
    },
    {
      name: 'Bread sticks',
      description: 'Served with marinara sauce.',
      price: 6.95
    }
   ];

}]);
