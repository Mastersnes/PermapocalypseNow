'use strict';
define([], function(){
	var data = [
            {
            	"name" : "pierre0",
             	"image":"game/tiles/blocs/pierre/pierre0.png",
            },
			{
				"name" : "pierre1",
				"image":"game/tiles/blocs/pierre/pierre1.png",
			},
			{
				"name" : "pierre2",
				"image":"game/tiles/blocs/pierre/pierre2.png",
			},
			{
				"name" : "pierre3",
				"image":"game/tiles/blocs/pierre/pierre3.png",
			},
			{
				"name" : "pierre4",
				"image":"game/tiles/blocs/pierre/pierre4.png",
			},
			{
				"name" : "pierre5",
				"image":"game/tiles/blocs/pierre/pierre5.png",
			},
			{
				"name" : "pierre6",
				"image":"game/tiles/blocs/pierre/pierre6.png",
			}
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
