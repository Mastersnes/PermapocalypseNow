/*global define */
define(["app/utils/utils"],
    function(Utils) {
        'use strict';

        return function() {
            this.init = function() {
            	this.delay = [];
            	this.FLIP_H_FLAG = 0x80000000;
                this.FLIP_V_FLAG   = 0x40000000;
                this.FLIP_D_FLAG   = 0x20000000;
            };

            /**
             * Permet de dessiner la tuile en parametre
             * @param scene
             * @param x
             * @param y
             * @param tileset
             * @param id
             */
            this.renderTile = function(scene, x, y, Tilemap, id) {
                var flipH = (id & this.FLIP_H_FLAG) != 0;
                var flipV = (id & this.FLIP_V_FLAG) != 0;
                // var flipD = id & this.FLIP_D_FLAG != 0;

                id &= ~(this.FLIP_H_FLAG | this.FLIP_V_FLAG | this.FLIP_D_FLAG);

                var tile = Tilemap.getTile(id);
                if (!tile) return;

                var w = tile.w!=undefined ? tile.w : Tilemap.w();
                var h = tile.h!=undefined ? tile.h : Tilemap.h();

                var iso = Utils.cartesianToIso(x, y, w/2, h);
                var image = scene.add.sprite(iso.x, iso.y, tile.name);

                image.flipX = flipH;
                image.flipY = flipV;
            };

            /**
             * Permet de dessiner la map en parametre
             * @param scene
             * @param map
             */
            this.renderMap = function(scene, Tilemap) {
                var map = Tilemap.list();

            	for (var layerId in map) {
                    var layer = map[layerId];
                    var x = 0; var y = 0;

                    for (var tileId in layer.data) {
                        var tile = layer.data[tileId];

                        if (tile != 0)
                            this.renderTile(scene, x, y, Tilemap, tile);

                        x++;
                        if (x>=layer.width) {
                            x=0; y++;
                        }
                    }
                }
            };

            this.isDown = function(controls, scene, key, callback) {
                if (controls[key].isDown && !this.delay[key]) {
                    this.delay[key] = 50;
                    callback();
                }
                if (this.delay[key]) this.delay[key]--;
			};
			
			/**
             * Permet de controller la camera avec les touches flechées
             * @param controls
             * @param scene
             * @param speed
             */
            this.keyboardCamera = function(controls, camera, speed) {
                this.moveCarto(controls.up, controls.down, controls.left, controls.right, camera, speed);
            };

            /**
             * Permet de calculer la nouvelle position d'un  un element avec les touches indiquées
             * @param up
             * @param down
             * @param left
             * @param right
             */
            this.calculMove = function(up, down, left, right, speed) {
                var incr = {x:0, y:0};
                if (up.isDown) incr.y-=speed; else if (down.isDown) incr.y+=speed;
                if (left.isDown) incr.x-=speed; else if (right.isDown) incr.x+=speed;
                return incr;
            };
            
            /**
             * Permet de bouger un element
             */
            this.move = function(incr, element) {
                if (element.scrollX != undefined) element.scrollX+=incr.x;
                else element.setVelocityX(incr.x);
                if (element.scrollY != undefined) element.scrollY+=incr.y;
                else element.setVelocityY(incr.y);
            };

            this.init();
        };
    });