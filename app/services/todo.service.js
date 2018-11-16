(function () {
  'use strict';

  angular.module('app').factory('todoService', todoService);

  todoService.$inject = ['$http', '$q'];
  function todoService($http, $q) {
    return {
      addNewItem,
      getItems,
      deleteItem,
      incompleteCount,
      warningLevel
    };

    function addNewItem(items, newItem) {
      if (newItem && newItem.action) {
        items.push({
          action: newItem.action,
          done: false
        });
        newItem.action = '';
      }

    }

    function getItems() {
      return $http.get('data/todo.json')
        .then(res => res.data)
        .catch(() => $q.reject('Error'));
    }

    function deleteItem(items) {
      console.log(items.indexOf(items));
        items.splice(items.indexOf(items), 1);

    }

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