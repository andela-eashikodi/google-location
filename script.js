angular.module('maps', ['ngMap'])
  .config(function($httpProvider){

  });

angular.module('maps')
  .controller('mapCtrl', ['$scope', function($scope){
    
    $scope.Address = "Old Trafford, Trafford, United Kingdom";

    $scope.state_list = ['Abuja','Anambra','Enugu','Akwa Ibom','Adamawa','Abia','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers'];
    
  }]);
