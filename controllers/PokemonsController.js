angular.module('pokemonApp')
  .controller('pokemonsShowController', pokemonsShowController);

pokemonsShowController.$inject=['$http', '$routeParams', '$location'];
function pokemonsShowController($http, $routeParams, $location) {
  var vm = this;
  var pokemonId = $routeParams.id;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+pokemonId
  }).then(onpokemonShowSuccess, onError);


  function onpokemonShowSuccess(response){
    console.log('here\'s the data for pokemon', pokemonId, ':', response.data);
    vm.pokemon = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }

  vm.updatepokemon = function(pokemonToUpdate) {
    console.log('updating pokemon: ', pokemonToUpdate);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemonToUpdate._id,
      data: {
        name : pokemonToUpdate.name,
        pokedex : pokemonToUpdate.pokedex,
        image : pokemonToUpdate.image,
        evolves_from : pokemonToUpdate.evolves_from
      }
    }).then(onpokemonUpdateSuccess, onError);

    function onpokemonUpdateSuccess(response){
      console.log('here\'s the UPDATED data for pokemon', pokemonId, ':', response.data);
      vm.pokemon = response.data;
      $location.path('/');
    }
  };

  vm.deletepokemon = function(pokemon) {
    console.log('deleting pokemon: ', pokemon);
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
    }).then(onpokemonDeleteSuccess, onError);

    function onpokemonDeleteSuccess(response){
      console.log('pokemon delete response data:', response.data);
      $location.path('/');
    }
  };
}
