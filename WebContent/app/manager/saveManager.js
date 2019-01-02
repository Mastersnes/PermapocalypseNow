/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(kongregateUtils) {
	    this.init = function(kongregateUtils) {
			this.el = "";
			this.kongregateUtils = kongregateUtils;
			
			this.initSaveData();
		};
		
		/**
		 * Initialise les données de sauvegarde pour une premiere partie
		 */
		this.initSaveData = function() {
			this.loaded = false;
			this.saveData = {
					"compteurClick" : 0,
			};
		};
		
		/**
		 * Renvoi la sauvegarde
		 */
		this.getSave = function() {
	        if (!this.loaded) return null;
			return this.saveData;
		};
		
		/**
		 * Permet de savoir si il existe une partie a charger
		 */
		this.checkSave = function() {
			var saveSession = window.localStorage.getItem(Utils.name);
			return saveSession != null;
		};

		/**
		 * Permet de charger la sauvegarde en memoire
		 */
		this.loadSave = function() {
			var saveSession = window.localStorage.getItem(Utils.name);
	        if (saveSession) {
	            this.loaded = true;
	        	this.saveData = JSON.parse(Utils.decode(saveSession));
	        }
	        
	        //On rejout les envois kongregate à ce moment
		};
		
		/**
		 * Permet de sauvegarder en memoire
		 */
		this.saveInSession = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    window.localStorage.setItem(Utils.name, saveJeton);
		};

		/**
		 * Supprime la partie sauvegardée
		 */
		this.eraseSave = function() {
			this.initSaveData();
		    window.localStorage.removeItem(Utils.name);
		};
		
		/**
		 * Permet de sauvegarder un attribut
		 */
		this.save = function(key, value) {
			this.saveData[key] = value;
		};

		/**
		 * Permet de charger un attribut
		 */
		this.load = function(key) {
			return this.saveData[key];
		};
		
		this.init(kongregateUtils);
	};
});