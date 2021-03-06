app.controller('PoliticoCtrl',
  function($scope, $stateParams, $state, Auth, $location, FURL, $firebaseArray, $firebaseObject, $templateCache ) {

  $scope.pageloaded = "{'display : none'}";

  // Bind Firebase list of elected officials to the list
  $scope.ref = new Firebase(FURL)
  $scope.msgRef = new Firebase(FURL + "/feedback")
  $scope.feedback = $firebaseArray($scope.msgRef)

  userId = $stateParams.userId
  $scope.politico = $firebaseObject($scope.ref.child('politicos/' + userId))

  console.log($stateParams.userId)

  $scope.sendFeedback = function() {
    console.log("Saving message into database for moderation.")

    if ($scope.feedbackMsg) {

      $scope.submitError = false

      $scope.feedback.$add({
        msg: $scope.feedbackMsg,
        approved: 'false',
        forPoliticoID: userId
      });

      $scope.feedbackMsg = '' // Reset

      $scope.submitted = true

    }
    else {
      $scope.submitted = false
      console.log("No message entered.")
      $scope.submitError = true
    }



  }

})


