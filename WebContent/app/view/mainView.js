/*global define */
define(["jquery", "app/utils/utils", "app/data/tileset", "app/data/tilemap"], 
function($, Utils, Tileset, Tilemap) {
	'use strict';

	return function(Phaser) {
		this.init = function(Phaser) {
			var that = this;
			this.game = new Phaser.Game({
		        type: Phaser.AUTO,
		        width: 1024,
		        height: 768,
		        physics: {
		            "default" : 'arcade',
		            arcade: {
		                gravity: { y: 200 }
		            }
		        },
		        scene: {
		            preload: function() {that.preload(this);},
		            create: function() {that.create(this);},
		            update: function() {that.update(this);},
		            render: function() {that.render(this);},
		        }
		    });
		};
		
		this.preload = function(scene) {
			scene.load.setBaseURL('app/img/');

			scene.load.image('herbe', 'game/tiles/herbe.png');
			scene.load.image('herbe1', 'game/tiles/herbe1.png');
			scene.load.image('herbe2', 'game/tiles/herbe2.png');
		};
		
		this.create = function(scene) {
			var camera = scene.cameras.main;
			
//			var layers = Tilemap.list();
//			for (var layerId=0; layerId < layers.length; layerId++) {
//				var layer = Tilemap.get(layerId);
//				var x = 0;
//				var y = 0;
//				for (var tileIndex=0; tileIndex < layer.data.length; tileIndex++) {
//					var tileId = layer.data[tileIndex];
//					var tile = Tileset.get(tileId-1);
//					this.renderTile(scene, x, y, tile);
//					
//					x += Tileset.width();
//					if (tileIndex % layer.width == 0) {
//						x = 0;
//						y += Tileset.height();
//					}
//				}
//			}
			
			var decalageX = 8;
			var decalageY = 10;
			var w = 196; var h = 112;
			
			scene.add.image(0, 0, "herbe");
			//X
			var carto = {
					x: w/2 + decalageX, 
					y: decalageX
			};
			var iso = Utils.cartesianToIso((196 + 16)/2, 16/2);
			console.log("x", iso.x, iso.y);
//			scene.add.image(carto.x, carto.y, "herbe");
			scene.add.image(iso.x, iso.y, "herbe");
			
			//Y
			var carto = {
					x: decalageY/2, 
					y: h - decalageY
			};
			iso = Utils.cartesianToIso(10/2, 112 - 10);
			console.log("y", iso.x, iso.y);
//			scene.add.image(carto.x, carto.y, "herbe");
			scene.add.image(iso.x, iso.y, "herbe");
			
//			scene.add.image(0, 0, "herbe");
//			scene.add.image(196, 0, "herbe2");
			
			this.cursor = scene.input.keyboard.createCursorKeys();
//			camera.setZoom(0.5);
		};
		
		this.renderTile = function (scene, x, y, tile) {
			if (!tile) return;
			var iso = Utils.cartesianToIso(x, y);
//			scene.add.image(iso.x, iso.y, tile.image);
		};
		
		this.update = function(scene) {
			var cursor = this.cursor;
			var camera = scene.cameras.main;
			
			if (cursor.up.isDown) {
				camera.scrollY -= 4;
		    } else if (cursor.down.isDown) {
		    	camera.scrollY += 4;
		    }

		    if (cursor.left.isDown) {
		    	camera.scrollX -= 4;
		    } else if (cursor.right.isDown) {
		    	camera.scrollX += 4;
		    }
		};
		
		this.render = function(scene) {
		};
		
		this.init(Phaser);
	};
});