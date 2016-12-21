(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    var users = [
      {name: "Buster Bluth", bio: "Student, youngest son", bioVisible: false},
      {name: "George Bluth", bio: "Former CEO of Bluth Company", bioVisible: false},
      {name: "Lucille Bluth", bio: "Matriarch of Bluth family", bioVisible: false},
    ];
    
    $scope.message = "Hello!";
    $scope.myName = "Slim Shady";
    $scope.sum = 343 + 5353;
  });
    
}());