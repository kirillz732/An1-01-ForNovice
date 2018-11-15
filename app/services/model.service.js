(function () {
  'use strict';

  angular.module('app')
    .value('model', {
      "user": "Kirill",
      "userPhoto": "images/VZ.jpg",
      "items": [
        {"actions": "Estimate...", "done": false},
        {"actions": "Create...", "done": false},
        {"actions": "Edit...", "done": true},
        {"actions": "Delete...", "done": false}
      ]
    });


})();