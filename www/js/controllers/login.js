app.controller('LoginCtrl', function($scope, $stateParams, $state, Auth, $location) {

  $scope.login = function() {
    Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
      // User successfully logged in
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
    });
  };

  $scope.logout = function() {
    console.log("Trying to log out.")
    var ref = new Firebase("https://cbvoice.firebaseio.com/users");
    ref.unauth();
    //$location.path('login');
  }

  Auth.$onAuth(function(authData) {
    if (authData === null) {
      console.log("Not logged in yet");
      $state.go('login')
    } else {
      console.log("Logged in as", authData.uid);
      $state.go('list');
    }
    $scope.authData = authData; // This will display the user's name in our view
  });

})


