angular
  .module('todolist')
  .controller("ShowController", function ($scope, Todolist, supersonic) {
    $scope.todolist = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Todolist.find($scope.dataId).then( function (todolist) {
        $scope.$apply( function () {
          $scope.todolist = todolist;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.todolist.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });