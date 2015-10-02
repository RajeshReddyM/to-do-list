angular
  .module('todolist')
  .controller("IndexController", function ($scope, Todolist, supersonic) {
    $scope.todolists = null;
    $scope.showSpinner = true;

    Todolist.all().whenChanged( function (todolists) {
        $scope.$apply( function () {
          $scope.todolists = todolists;
          $scope.showSpinner = false;
        });
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      navigator.notification.confirm("Are you sure?");
      Todolist.find(id).then( function (task) {
        task.delete().then( function (){
          $scope.showSpinner = false;
          steroids.logger.log("Deleted task Successfully");
        });
      });
    }

  });