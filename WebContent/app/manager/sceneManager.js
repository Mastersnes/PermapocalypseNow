'use strict';
define(["app/utils/utils"], function(Utils){
	return {
        renderTile : function(scene, x, y, tileset, id) {
			var tile = tileset.get(id);
			if (!tile) return;

			var w = tile.w!=undefined ? tile.w : tileset.w();
			var h = tile.h!=undefined ? tile.h : tileset.h();
			var H = tile.H!=undefined ? tile.H : tileset.H();

			var iso = Utils.cartesianToIso(x, y, w, H-h);
			scene.add.image(iso.x, iso.y, tile.name);
    	},
        keyboardCamera : function(controls, scene, speed) {
            if (!speed) speed = 4;
        	var camera = scene.cameras.main;
        	if (controls.up.isDown) camera.scrollY-=speed;
        	if (controls.down.isDown) camera.scrollY+=speed;
        	if (controls.left.isDown) camera.scrollX-=speed;
        	if (controls.right.isDown) camera.scrollX+=speed;
		}
	};
});