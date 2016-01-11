(function () {
  'use strict';

  angular
    .module('shoppingList')
    .controller('ShopsPageController', ShopsPageController);

  /** ngInject */
  function ShopsPageController($log, $location) {
    $log.info('shops controller initialized');

    var vm = this;

    vm.shopList = [
      {
        id: 1,
        name: 'name1'
      },
      {
        id: 2,
        name: 'name2',
        selected: true
      },
      {
        id: 3,
        name: 'name3'
      },
      {
        id: 4,
        name: 'name4'
      },
      {
        id: 5,
        name: 'name5'
      }
    ];

    vm.go = function (shopId) {
      // debugger;
      $log.info('shop is clicked:', shopId);
      $location.path('/shop/' + shopId);
      // $state.go('items', [{ shopId: shopId }]);
    }

  }

})();