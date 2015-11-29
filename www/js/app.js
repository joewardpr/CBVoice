// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.constant('FURL', 'https://cbvoice.firebaseio.com/')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  $stateProvider.state('list', {
    url: '/politicos',
    templateUrl: 'templates/politicos.html',
    controller: 'LoginCtrl'
  })

  $stateProvider.state('politico', {
    url: "/politico/:userId",
    templateUrl: "templates/politico.html",
  });

})

.factory("Auth", function($firebaseAuth, FURL) {
  var usersRef = new Firebase(FURL + "users");
  return $firebaseAuth(usersRef);
})

