'use strict';
define(["jquery",
        "app/utils/utils"], function($, Utils){
	var data = {
			"bienvenue" : {
				fr : "Bienvenue",
				en : "Welcome"
			},
			"guest" : {
				fr : "Invité",
				en : "Guest"
			},
			"chargement" : {
				fr : "...Chargement...",
				en : "...Loading..."
			}
	};
	
	return {
		local : null,
		
		get : function(key) {
			if (!this.local) {
				this.local = navigator.language || navigator.userLanguage;
				if (this.local) {
					this.local = this.local.toLowerCase();
					if (this.local.indexOf("fr") > -1) this.local = "fr";
					else if (this.local.indexOf("en") > -1) this.local = "en";
				}else this.local = "en";
			}
			
			var text = data[key];
			if (!text) return key;
			
			if (text[this.local]) return text[this.local]; 
			else if (text.en) return text.en;
			else return key;
		},
		
		/**
		* Permet de charger le language en session
		**/
		loadLanguage : function() {
			var sessionLanguage = window.localStorage.getItem("bebelLanguage");
			if (sessionLanguage) this.local = sessionLanguage;
		},
		
		/**
		* Permet de modifier le language en session
		**/
		setLanguage : function(newLanguage) {
			window.localStorage.setItem("bebelLanguage", newLanguage);
		}
	};
});
