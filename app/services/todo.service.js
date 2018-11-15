(function () {
  'use strict';

  angular.module('app').factory('todoService', todoService);

  function todoService() {
    return {
      incompleteCount
    };

    function incompleteCount(items) {
      let count = 0;

      angular.forEach(items, (item) => {
        if (!item.done) {
          count++
        }
      });

      return count;
    }
  }
})();