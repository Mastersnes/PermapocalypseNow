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
                init : function(data) {that.initData(this, data);},
                preload: function() {that.preload(this);},
                create: function() {that.create(this);},
                update: function() {that.update(this);},
                render: function() {that.render(this);},
			});
		};

        this.initialize = function(scene) {
            this.scene = scene;
            Phaser.Scene.call(scene, { key: 'game' });
        };

        this.initData = function(scene, data) {
            console.log(scene, data);
            if (data) console.log(data.test);
        };

		this.preload = function(scene) {
            scene.load.setBaseURL('app/img/');
            Herbes.load(scene);
		};

        this.create = function(scene) {
            this.controls = scene.input.keyboard.createCursorKeys();

            SceneManager.renderTile(scene, 0, 0, Herbes, 2);
            SceneManager.renderTile(scene, 1, 0, Herbes, 0);
            SceneManager.renderTile(scene, 2, 0, Herbes, 1);

            scene.events.on('shutdown', this.shutdown, this);
        };

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
        }

        this.update = function(scene) {
            var game = scene.game;
            var controls = this.controls;

            SceneManager.keyboardCamera(controls, scene);

            if (controls.space.isDown) {
                scene.scene.switch("menu", {plop:"MOUU"});
            }
        };
        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});