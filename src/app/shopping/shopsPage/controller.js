(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ShopsController', ShopsController);

  /** ngInject */
  function ShopsController($log) {
    $log.info('shops controller initialized')
  }
  
})();