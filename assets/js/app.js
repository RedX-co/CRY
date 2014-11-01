var app = angular.module("cryApp", ["firebase"]);

app.controller("CryCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://cry.firebaseio.com/abouts");
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "abouts");
});
