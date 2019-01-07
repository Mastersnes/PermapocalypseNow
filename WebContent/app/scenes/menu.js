/*global define */
define(["app/manager/sceneManager"],
function(SceneManager) {
	'use strict';

	return function(Phaser) {
		this.init = function(Phaser) {
		    this.sceneManager = new SceneManager();
		    var that = this;
			this.scene = new Phaser.Class({
                Extends: Phaser.Scene,
                initialize: function() {that.initialize(this);},
                preload: function() {that.preload(this);},
                create: function() {that.create(this);},
                update: function() {that.update(this);},
                render: function() {that.render(this);},
			});
		};

        this.initialize = function(scene) {
            this.scene = scene;
            Phaser.Scene.call(scene, { key: 'menu' });
        };

        this.initData = function(scene, data) {
        };

		this.preload = function(scene) {
            scene.load.setBaseURL('app/img/');
		};

        this.create = function(scene) {
        	this.controls = scene.input.keyboard.createCursorKeys();

            scene.events.on('shutdown', this.shutdown, this);
        };

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
        };

        this.update = function(scene) {
        	var game = scene.game;
			var controls = this.controls;

            this.sceneManager.keyboardCamera(controls, scene);

            this.sceneManager.isDown(controls, scene, "space", function() {
                scene.scene.switch("game");
            });
        };

        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});