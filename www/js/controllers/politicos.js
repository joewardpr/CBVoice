app.controller('PoliticosCtrl', function($scope, $stateParams, $state, Auth, $location, FURL, $firebaseObject) {

  // Bind Firebase list of elected officials to the list
  ref = new Firebase(FURL);
  $scope.politicos = $firebaseObject(ref.child('politicos'));


})


