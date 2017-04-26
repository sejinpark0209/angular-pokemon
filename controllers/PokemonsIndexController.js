angular.module('pokemonApp')
  .controller('pokemonsIndexController', pokemonsIndexController);

pokemonsIndexController.$inject=['$http'];
function pokemonsIndexController($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(onpokemonsIndexSuccess, onError)

  function onpokemonsIndexSuccess(response){
    console.log('here\'s the get all pokemons response data', response.data);
    vm.pokemons = response.data.pokemons;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
