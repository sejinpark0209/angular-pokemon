angular
  .module('pokemonApp')
  .controller('pokemonsIndexController', pokemonsIndexController);
pokemonsIndexController.$inject = ['$http'];

function pokemonsIndexController ($http) {
  var vm = this;
  console.log("this is controller")
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data.pokemons;
  }, function errorCallback(response) {
    console.log('There was an error', response);
  });

}