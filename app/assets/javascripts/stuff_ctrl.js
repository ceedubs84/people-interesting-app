(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.users = [
      {name: "Buster Bluth", bio: "Student, youngest son", bioVisible: true},
      {name: "George Bluth", bio: "Former CEO of Bluth Company", bioVisible: true},
      {name: "Lucille Bluth", bio: "Matriarch of Bluth family", bioVisible: true},
    ];

    $scope.addUser = function(inputName, inputBio, inputBioVisible) {
      var newUser = {name: inputName, bio: inputBio, bioVisible: false};
      $scope.users.push(newUser);
    };

    $scope.isVisible = function(user) {
      if (user.bioVisible.indexOf("false") === -1) {
        user.bioVisible = "true";
      } else if (user.bioVisible.indexOf("true") === -1) {
        user.bioVisible = "false";
      }
    };
    

    $scope.bioToggle = function(user) {
      if (user.bioVisible)
    };

    $scope.sum = 343 + 5353;
  });
    
}());