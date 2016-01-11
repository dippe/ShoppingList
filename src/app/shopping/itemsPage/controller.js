(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ItemsPageController', ItemsPageController);

  /** ngInject */
  function ItemsPageController($log) {
    $log.info('items controller initialized');

    var vm = this;
    
    vm.itemList = [
      {
        name: 'name1'
      },
      {
        name: 'name2',
        count: 2
      },
      {
        name: 'name3'
      },
      {
        name: 'name4'
      },
      {
        name: 'name5'
      }
    ];

  }

})();