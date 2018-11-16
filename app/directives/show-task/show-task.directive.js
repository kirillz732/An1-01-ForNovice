(function () {
  'use strict';

  angular.module('app').directive('showTask', showTask);

  function showTask() {
    const directive = {
      restrict: 'E',
      templateUrl: 'directives/show-task/show-task.directive.html'
    };

    return directive;
  }

})();