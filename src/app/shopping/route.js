(function () {
  'use strict';

  angular
    .module('shoppingList')
    .config(shoppingListRouter);
    
  /** ngInject */
  function shoppingListRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('shops', {
        url: '/shops',
        templateUrl: 'app/shopping/shopsPage/main.html',
        controller: 'ShopsPageController',
        controllerAs: 'shops'
      })
      .state('items', {
        url: '/shop/:shopId',
        templateUrl: 'app/shopping/itemsPage/main.html',
        controller: 'ItemsPageController',
        controllerAs: 'items'
      })
      .state('config', {
        url: '/config',
        templateUrl: 'app/shopping/configPage/main.html',
        controller: 'ConfigPageController',
        controllerAs: 'configs'
      });

    $urlRouterProvider.otherwise('/shops');
  }
})();