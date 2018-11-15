(function () {
  'use strict';

  angular.module('app')
    .controller('Todo', Todo);

  Todo.$inject = ['model'];
  function Todo(model) {
    let $ctrl = this;
    $ctrl.todo = model;

    console.log($ctrl.todo.actions);
  }

})();