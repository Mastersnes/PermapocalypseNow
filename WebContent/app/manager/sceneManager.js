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
                var image = scene.add.image(iso.x, iso.y, tile.name);

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
            this.keyboardCamera = function(controls, scene, speed) {
                if (!speed) speed = 4;
                var camera = scene.cameras.main;
                if (controls.up.isDown) camera.scrollY-=speed;
                if (controls.down.isDown) camera.scrollY+=speed;
                if (controls.left.isDown) camera.scrollX-=speed;
                if (controls.right.isDown) camera.scrollX+=speed;
            };

            this.init();
        };
    });