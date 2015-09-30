angular
  .module('todolist')
  .controller("NewController", function ($scope, Todolist, supersonic) {
    $scope.todolist = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newtodolist = new Todolist($scope.todolist);
      newtodolist.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });