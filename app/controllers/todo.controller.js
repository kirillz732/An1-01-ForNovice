(function () {
  'use strict';

  angular.module('app')
    .controller('Todo', Todo);

  Todo.$inject = ['model', 'todoService'];
  function Todo(model, todoService) {
    let $ctrl = this;

    $ctrl.todo = model;
    $ctrl.myName = 'Kirill';
    $ctrl.myHTML = '<span>Kirill</span>';

    $ctrl.incompleteCount = todoService.incompleteCount;

    console.log($ctrl.todo.actions);
  }

})();