
	var Appodeal = exports;

	var exec = require('cordova/exec');
	var cordova = require('cordova');

	Appodeal.initialize = function(appKey) {
		exec(null, null, "AppodealPlugin", "initialize", [appKey]);
	}

	Appodeal.showBanner = function() {
		exec(null, null, "AppodealPlugin", "showBanner", []);
	}