// Iniciar Firebase
var config = {
  apiKey: "AIzaSyB2ZqWdElGTBzpRK-PA9Px4Wle4_GYZ2fA",
  authDomain: "project-6b3a7.firebaseapp.com",
  databaseURL: "https://project-6b3a7.firebaseio.com",
  projectId: "project-6b3a7",
  storageBucket: "project-6b3a7.appspot.com",
  messagingSenderId: "337767740533"
};
firebase.initializeApp(config);

// Iniciar Angular
var app = angular.module("app",["firebase","ngRoute"]);

/*
app.controller("Nombre del controlador", function($scope, $firebaseObject){
  var ref = firebase.database().ref().child("Nodo hijo en la base de datos");
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "nombre del scope en el html");
  });
*/

//Establecer Rutas
app.config(function($routeProvider,$locationProvider){$routeProvider
  .when("/", {templateUrl : "template/app.html"})
  .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
});

//Controlador principal
app.controller("crt", function($scope) {
  $scope.atop="template/nav1.html";
  $scope.aleft="template/blank.html";
  $scope.aright="template/blank.html";
  $scope.abottom="template/copyright.html";
});
