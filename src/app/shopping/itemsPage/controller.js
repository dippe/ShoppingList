(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ItemsController', ItemsController);

  /** ngInject */
  function ItemsController($log) {
    $log.info('items controller initialized')
  }
  
})();