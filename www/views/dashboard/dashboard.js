angular.module('starter')
  .controller("dashboardCtrl", function ($scope,$http,$state, $location) {
    $scope.arr = [  {incomingText: "First"}];

    $scope.orderFunction = function(){


        $scope.arr.push({incomingText: $scope.order});
        $scope.order = "";

      console.log("order click", order.productName);
    }




  });
