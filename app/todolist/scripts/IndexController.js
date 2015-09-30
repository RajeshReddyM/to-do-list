angular
  .module('todolist')
  .controller("IndexController", function ($scope, Todolist, supersonic) {
    $scope.todolists = null;
    $scope.showSpinner = true;
    $scope.searchtext = null;

    Todolist.all().whenChanged( function (todolists) {
        $scope.$apply( function () {
          $scope.todolists = todolists;
          $scope.showSpinner = false;
        });
    });

    $scope.search = function(searchtext) {
      var query = {"text": searchtext}
      Todolist.findAll({query: JSON.stringify(query)}).then( function (todolists) {
        $scope.$apply(function() {
          $scope.todolists = todolists;
          $scope.showSpinner = false;
        });
      });
    }

  });