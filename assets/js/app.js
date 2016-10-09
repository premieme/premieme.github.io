var myApp = angular.module('premieme', ['backand']);

//Update Angular configuration section
myApp.config(function (BackandProvider) {
    BackandProvider.setAppName('premieme');
    BackandProvider.setSignUpToken('eba6c2c9-7033-469e-9c61-c18853320e83');
    BackandProvider.setAnonymousToken('ac95f29b-38cc-4571-9930-e20ac3c4b42c');
});

myApp.controller('LeadCtrl', ['$scope', '$http', 'Backand', LeadCtrl]);

function LeadCtrl($scope, $http, Backand) {

  $scope.leadGenerated = false;
  
  $scope.generate = function() {
    $scope.leadGenerated = true;
    $scope.lead.when = new Date();

    $http({
      method: 'POST',
      url: Backand.getApiUrl() + '/1/objects/lead',
      data: $scope.lead
    }).then(
      function success(response) {
      },
      function fail(response) {
        $scope.leadGenerated = false;
      }
    );
  }

}