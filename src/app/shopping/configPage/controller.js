(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ConfigPageController', ConfigPageController);

  /** ngInject */
  function ConfigPageController($log) {
    $log.info('config controller initialized')
  }
  
})();