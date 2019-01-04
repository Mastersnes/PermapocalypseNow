/*global define */
define(["app/manager/sceneManager", "app/data/tilesets/herbes"],
function(SceneManager, Herbes) {
	'use strict';

	return function(Phaser) {
		this.init = function(Phaser) {
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
            Phaser.Scene.call(scene, { key: 'game' });
        };

		this.preload = function(scene) {
            scene.load.setBaseURL('app/img/');
            Herbes.load(scene);
		};

        this.create = function(scene) {
            console.log("Welcome in game");
            this.controls = scene.input.keyboard.createCursorKeys();

            SceneManager.renderTile(scene, 0, 0, Herbes, 2);
            SceneManager.renderTile(scene, 1, 0, Herbes, 0);
            SceneManager.renderTile(scene, 2, 0, Herbes, 1);
        };

        this.update = function(scene) {
            var game = scene.game;
            var controls = this.controls;

            SceneManager.keyboardCamera(controls, scene);

            if (controls.space.isDown) {
                game.scene.stop("game");
                game.scene.start("menu");
            }
        };

        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});