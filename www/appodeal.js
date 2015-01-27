
	var Appodeal = exports;

	var exec = require('cordova/exec');
	var cordova = require('cordova');

	Appodeal.initialize = function(appKey) {
		exec(null, null, "AppodealPlugin", "initialize", [appKey]);
	}

	Appodeal.showBanner = function(sucessCallback, failCallback) {
		exec(sucessCallback, failCallback, "AppodealPlugin", "showBanner", []);
	}
	
	Appodeal.isLoaded = function() {
		exec(null, bull, "AppodealPlugin", "isLoaded", []);
	}