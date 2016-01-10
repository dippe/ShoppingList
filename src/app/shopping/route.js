(function () {
  'use strict';

  angular
    .module('shoppingList')
    .config(shoppingListRouter);
    
  /** ngInject */
  function shoppingListRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'app/shopping/shopsPage/main.html',
        controller: 'ShopsController',
        controllerAs: 'shop'
      })
      .state('items', {
        url: '/items',
        templateUrl: 'app/shopping/itemsPage/main.html',
        controller: 'ItemsController',
        controllerAs: 'items'
      })
      .state('config', {
        url: '/config',
        templateUrl: 'app/shopping/configPage/main.html',
        controller: 'ConfigController',
        controllerAs: 'config'
      });

    $urlRouterProvider.otherwise('/');
  }
})();