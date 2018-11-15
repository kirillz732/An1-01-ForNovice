(function () {
  'use strict';

  angular.module('app').factory('todoService', todoService);

  function todoService() {
    return {
      incompleteCount,
      warningLevel
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
    
    function warningLevel(items) {
      return incompleteCount(items) < 3
      ? 'label-success' : 'label-warning'
    }
  }
})();