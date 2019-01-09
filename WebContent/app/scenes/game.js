/*global define */
define(["jquery", "app/manager/sceneManager",
        "app/data/tilemap",


        , "jquery-scroll"],
function($, SceneManager, Tilemap) {
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
            Phaser.Scene.call(scene, { key: 'game' });
        };

		this.preload = function(scene) {
            var camera = scene.cameras.main;

            scene.load.setBaseURL('app/img/');
            Tilemap.load(scene);

            scene.zoom = 0.5;
            camera.setZoom(scene.zoom);
		};

        this.create = function(scene) {
            var camera = scene.cameras.main;

            var world = {
                w : Tilemap.width() * Tilemap.w(),
                h : Tilemap.height() * Tilemap.h()
            };

            camera.setBounds(-world.w/2, -10, world.w, world.h);
            // scene.physics.world.setBounds(-world.w, -world.h, world.w, world.h);

            this.sceneManager.renderMap(scene, Tilemap);

            this.makeEvents();
        };

        this.makeEvents = function() {
            var that = this;
            var scene = this.scene;
            var camera = scene.cameras.main;
            this.controls = scene.input.keyboard.createCursorKeys();

            scene.events.on('shutdown', this.shutdown, this);

            scene.input.on('pointermove', function (pointer) {
                that.mouse = pointer;
            }, this);

            $("canvas").on('mousewheel', function(event) {
                scene.zoom += event.deltaY * 0.05;
                if (scene.zoom > 0.7)
                    scene.zoom = 0.7;
                else if (scene.zoom < 0.4)
                    scene.zoom = 0.4;
                else if (event.deltaY > 0)
                    camera.centerOn(event.offsetX + camera.scrollX, event.offsetY + camera.scrollY);
                camera.setZoom(scene.zoom);
            });
        }

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
            scene.input.mouse.shutdown();
        };
        
        this.update = function(scene) {
            var controls = this.controls;

            this.sceneManager.keyboardCamera(controls, scene);
            this.sceneManager.isDown(controls, scene, "space", function() {
                scene.scene.switch("menu");
            });
        };
        
        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});