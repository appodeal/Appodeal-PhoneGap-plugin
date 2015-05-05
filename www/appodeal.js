
	var Appodeal = exports;

	var exec = require('cordova/exec');
	var cordova = require('cordova');
	
	adType = {
	  NONE: '0',
	  INTERSTITIAL: '1',
	  VIDEO: '2',
	  ALL: '7',
	  ANY: '7'
	};

	Appodeal.initialize = function(appKey) {
		exec(null, null, "AppodealPlugin", "initialize", [appKey]);
	}
	
	Appodeal.initialize = function(appKey, adType) {
		exec(null, null, "AppodealPlugin", "initializeAdType", [appKey, adType]);
	}
	
	Appodeal.enableInterstitialCallbacks = function(listener) {
		exec(null, null, "AppodealPlugin", "enableIntertitialCallbacks", [listener]);
	}
	
	Appodeal.enableVideoCallbacks = function(listener) {
		exec(null, null, "AppodealPlugin", "enableVideoCallbacks", [listener]);
	}

	Appodeal.show = function(adType) {
		exec(null, null, "AppodealPlugin", "show", [adType]);
	}
	
	Appodeal.showWithPriceFloor = function(adType) {
		exec(null, null, "AppodealPlugin", "showWithPriceFloor", [adType]);
	}
	
	Appodeal.setAutoCache = function(adType, autoCache) {
		exec(null, null, "AppodealPlugin", "setAutoCache", [adType, autoCache]);
	}
	
	Appodeal.cache = function(adType) {
		exec(null, null, "AppodealPlugin", "cacheBanner", [adType]);
	}
	
	Appodeal.setOnLoadedTriggerBoth = function(adType, setTrigger) {
		exec(null, null, "AppodealPlugin", "setOnLoadedTriggerBoth", [adType, setTrigger]);
	}
	
	Appodeal.disableNetwork = function(network) {
		exec(null, null, "AppodealPlugin", "disableNetwork", [network]);
	}
