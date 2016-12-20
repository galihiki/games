(function() {

  'use strict';

  angular
    .module('myapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm =this;

    vm.redirect = function () {
      vm.greeting="working";
      $state.go('memoryGame');
    }
  }

})();
