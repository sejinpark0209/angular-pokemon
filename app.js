angular.module('pokemonApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pokemons/index.html',
      controller: 'pokemonsIndexController',
      controllerAs: 'pokemonsIndexCtrl'
    })
    .when('/pokemons/:id', {
      templateUrl: 'templates/pokemons/show.html',
      controller: 'pokemonsShowController',
      controllerAs: 'pokemonsShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
