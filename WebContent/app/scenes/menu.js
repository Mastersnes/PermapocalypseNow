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
            this.scene = scene;
            Phaser.Scene.call(scene, { key: 'menu' });
        };

        this.initData = function(scene, data) {
        };

		this.preload = function(scene) {
            scene.load.setBaseURL('app/img/');
            Herbes.load(scene);
		};

        this.create = function(scene) {
        	this.controls = scene.input.keyboard.createCursorKeys();

        	SceneManager.renderTile(scene, 0, 0, Herbes, 0);
            
            scene.events.on('shutdown', this.shutdown, this);
        };

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
        };

        this.update = function(scene) {
        	var game = scene.game;
			var controls = this.controls;

            SceneManager.keyboardCamera(controls, scene);

        	if (controls.space.isDown && !this.delaySpace) {
                scene.scene.switch("game");
                this.delaySpace = 50;
			}
        	if (this.delaySpace) this.delaySpace--;
        };

        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});