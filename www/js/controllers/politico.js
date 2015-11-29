app.controller('PoliticoCtrl', function($scope, $stateParams, $state, Auth, $location, FURL, $firebaseObject) {

  // Bind Firebase list of elected officials to the list
  ref = new Firebase(FURL);
  userId = $stateParams.userId
  $scope.politico = $firebaseObject(ref.child('politicos/' + userId));

  console.log($stateParams.userId)

})


