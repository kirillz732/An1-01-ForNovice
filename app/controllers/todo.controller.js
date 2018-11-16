(function () {
  'use strict';

  angular.module('app')
    .controller('Todo', Todo);

  Todo.$inject = ['model', 'todoService'];
  function Todo(model, todoService) {
    let $ctrl = this;

    $ctrl.showComplete = true;
    $ctrl.todo = model;

    Object.assign($ctrl, todoService);

  }

})();