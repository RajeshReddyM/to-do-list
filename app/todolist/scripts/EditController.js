angular
  .module('todolist')
  .controller("EditController", function ($scope, Todolist, supersonic) {
    $scope.todolist = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Todolist.find(steroids.view.params.id).then( function (todolist) {
      $scope.$apply(function() {
        $scope.todolist = todolist;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.todolist.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
