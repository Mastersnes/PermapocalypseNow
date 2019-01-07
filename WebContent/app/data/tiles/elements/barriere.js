'use strict';
define([], function(){
	var data = [
            {
            	"name" : "barriere1",
             	"image":"game/tiles/elements/barriere/barriere1.png",
            },
	];
	
	return {
		get : function(key) {
			return data[key];
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
