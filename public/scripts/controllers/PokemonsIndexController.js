angular
  .module('pokemonApp')
  .controller('pokemonsIndexController', pokemonsIndexController);

pokemonsIndexController.$inject = ['$http'];
function pokemonsIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemon = response.data.pokemon;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  

}