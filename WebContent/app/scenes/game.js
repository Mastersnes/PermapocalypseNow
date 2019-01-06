/*global define */
define(["app/manager/sceneManager", "app/data/tilesets/herbes",
        "app/data/tilemap"],
function(SceneManager, Herbes, Tilemap) {
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
            Phaser.Scene.call(scene, { key: 'game' });
        };

		this.preload = function(scene) {
			scene.zoom = 1;
            scene.load.setBaseURL('app/img/');
            Herbes.load(scene);
		};

        this.create = function(scene) {
        	var camera = scene.cameras.main;
            this.controls = scene.input.keyboard.createCursorKeys();
            
            for (var layerId in Tilemap.list()) {
            	var layer = Tilemap.get(layerId);
            	var x = 0;
            	var y = 0;
            	for (var tileId in layer.data) {
            		var tile = layer.data[tileId];
            		
            		SceneManager.renderTile(scene, x, y, Herbes, tile);
            		
            		x++;
            		if (x>layer.width) {
            			x=0;
            			y++;
            		}
            	}
            }
            
            camera.setZoom(scene.zoom);
            
            scene.events.on('shutdown', this.shutdown, this);
            scene.input.mouse.mouseWheelCallback = this.mouseWheel;
            
            console.log("scroll :", scene.input.mouse);
            console.log("scrollWheel :", scene.input.mouse.mouseWheelCallback);
            
            this.direction = null;
        };

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
        };
        
        this.mouseWheel = function(event) {
        	console.log("mouseWheel", event);
        	var scene = this.scene;
        	if(scene.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP) this.direction = 'UP';
        	else this.direction = 'DOWN';
        };

        this.update = function(scene) {
            var game = scene.game;
            var controls = this.controls;

            SceneManager.keyboardCamera(controls, scene);

            if (controls.space.isDown && !this.delaySpace) {
                scene.scene.switch("menu");
                this.delaySpace = 50;
			}
        	if (this.delaySpace) this.delaySpace--;
        };
        
        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});