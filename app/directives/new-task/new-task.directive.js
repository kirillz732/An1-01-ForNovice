(function () {
  'use strict';

  angular.module('app').directive('newTask', newTask);

  function newTask() {
    const directive = {
      restrict: 'E',
      templateUrl: 'directives/new-task/new-task.directive.html'
    };

    return directive;
  }

})();