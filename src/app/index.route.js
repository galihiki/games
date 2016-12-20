(function() {
  'use strict';

  angular
    .module('myapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $stateProvider
      .state('memoryGame',{
        url: '/memoryGame',
        templateUrl: 'app/memoryGame/memoryGame.html',
        controller: 'MemoryGameController',
        controllerAs: 'memory'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
