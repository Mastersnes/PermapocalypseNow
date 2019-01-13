/*global define */
define(["jquery", "app/utils/utils", "app/manager/sceneManager",
        "app/data/tilemap",


        , "jquery-scroll"],
function($, Utils, SceneManager, Tilemap) {
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
                update: function(time, delta) {that.update(this, time, delta);},
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
            scene.load.image("hero", "game/personnages/hero.png");

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

            this.sceneManager.renderMap(scene, Tilemap);
            
            this.hero = scene.physics.add.sprite(-400, 400, "hero");

            this.makeEvents();
        };

        this.makeEvents = function() {
            var that = this;
            var scene = this.scene;
            var camera = scene.cameras.main;
            this.controls = scene.input.keyboard.createCursorKeys();
            this.zqsd = scene.input.keyboard.addKeys('z,q,s,d');

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
        };

        this.shutdown = function() {
            var scene = this.scene;
            scene.input.keyboard.shutdown();
            scene.input.mouse.shutdown();
        };
        
        this.update = function(scene, time, delta) {
            var controls = this.controls;

//          this.sceneManager.moveCarto(controls.up, controls.down, controls.left, controls.right, scene.cameras.main);
            this.sceneManager.isDown(controls, scene, "space", function() {
                scene.scene.switch("menu");
            });
            
            var zqsd = this.zqsd;
            var speed = delta;
            var move = this.sceneManager.calculMove(controls.up, controls.down, controls.left, controls.right, speed);
            this.sceneManager.move(Utils.cartesianToIso(move.x, move.y, speed, speed), this.hero);
        };
        
        this.render = function(scene) {

        };

        this.init(Phaser);
	};
});