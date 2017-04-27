console.log("app.js works")
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pokemons/index.html',
      controllerAs: 'pokemonsIndexCtrl',
      controller: 'pokemonsIndexController'
    })
    .when('/pokemons/:id', {
      templateUrl: 'templates/pokemons/:id',
      controllerAs: 'pokemonssShowCtrl',
      controller: 'pokemonssShowController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}