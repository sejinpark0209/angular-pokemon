console.log("app.js works")

angular
//we want to have access to 'ngRoute' 
//when to use ngRoute? when we don't have routing, we don't use it
  .module('pokemonApp',['ngRoute'])
  .config(config);
//'$routeProvider', '$locationProvider' service built in ngRoute module
//injecting '$routeProvider', '$locationProvider' dependencies
config.$inject = ['$routeProvider', '$locationProvider'];
//routeProvider provides services    tempUrl , controller, controllerAs
//$routeProvider is object with a lot of functionallity
function config ($routeProvider, $locationProvider) {
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
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}