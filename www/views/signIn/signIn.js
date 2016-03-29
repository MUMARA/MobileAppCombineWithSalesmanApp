var app = angular.module('starter');
app.controller("signInCtrl", function ($scope, $http, $rootScope, $state ,$ionicPopup) {

    $scope.signIn = {};

    console.log($rootScope.url);

    $scope.doSignin = function(){

        $http.post( $rootScope.url + "/mobo/signIn",{
            email: $scope.signIn.email,
            password: $scope.signIn.password
        }).then(function (res) {

            console.log(res, "signIn.js");

            //vm.data = res.data;

            //localStorage.setItem("uid", "fgsdf");

            $state.go("dashboard");


        }, function myError(err) {

            console.log(err, "signIn.js err");

            $ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: 'It might taste good'
            });
        })


    }




});
