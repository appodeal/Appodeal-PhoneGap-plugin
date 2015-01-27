package com.appodeal.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import com.appodeal.stats.Appodeal;


public class AppodealPlugin extends CordovaPlugin{
	
	
	private static final String ACTION_INI_APPODEAL = "initialize";
	private static final String ACTION_SHOW_BANNER = "showBanner";
	private static final String ACTION_IS_LOADED = "showBanner";
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callback) throws JSONException{
		
		if (action.equals(ACTION_INI_APPODEAL)) {
			final String appKey = args.getString(0);
			
			cordova.getActivity().runOnUiThread(new Runnable() {
				@Override
				public void run() {
					Appodeal.initializeSDK(cordova.getActivity(), appKey);
				}
			});
			
			return true;
		} else if (action.equals(ACTION_SHOW_BANNER)){
			cordova.getActivity().runOnUiThread(new Runnable() {
				@Override
				public void run() {
					Appodeal.showBanner(cordova.getActivity());
				}
			});
		} else if (action.equals(ACTION_IS_LOADED)){
			Appodeal.isLoaded();
		}
		
		return false;
	}
}