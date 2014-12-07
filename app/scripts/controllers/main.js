'use strict';

angular.module('freezewebApp')
  .controller('MainCtrl', function ($scope, $http) {
   $scope.form = {};
    $scope.errors = {};

    $scope.edit = function(form) {
      console.log(form);	
      $scope.submitted = true;
      $http.post('/api/store', form)
      	.success(function(data) {
            alert("Success" + data);
    })
    .error(function (data) {
    	alert(data);
    });
    } 


  });
