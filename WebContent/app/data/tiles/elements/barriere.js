'use strict';
define([], function(){
	var data = [
            {
            	"id" : 0,
            	"name" : "barriere1",
             	"image":"game/tiles/elements/barriere/barriere1.png",
            },
	];
	
	return {
		get : function(key) {
            for (var id in data) {
                var tile = data[id];
                if (tile.id == key) return tile;
            }
            return null;
		},
		list : function() {
			return data;
		},
		load : function(scene) {
			for (var id in data) {
				var tile = data[id];
                scene.load.image(tile.name, tile.image);
			}
		}
	};
});
