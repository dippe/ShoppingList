(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ConfigController', ConfigController);

  /** ngInject */
  function ConfigController($log) {
    $log.info('config controller initialized')
  }
  
})();