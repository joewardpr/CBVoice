app.controller('PoliticoCtrl',
  function($scope, $stateParams, $state, Auth, $location, FURL, $firebaseArray, $firebaseObject ) {

  // Bind Firebase list of elected officials to the list
  $scope.ref = new Firebase(FURL)
  $scope.msgRef = new Firebase(FURL + "/feedback")
  $scope.feedback = $firebaseArray($scope.msgRef)


  userId = $stateParams.userId
  $scope.politico = $firebaseObject($scope.ref.child('politicos/' + userId))

  console.log($stateParams.userId)

  $scope.sendFeedback = function() {
    console.log("Saving message into database for moderation.")

    $scope.feedback.$add({
      msg: $scope.feedbackMsg,
      approved: 'false'
    });

    $scope.submitted = true

  }

})


