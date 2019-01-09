'use strict';
define([], function(){
	var data = [
			{
                "id":0,
				"name" : "pierre1",
				"image":"game/tiles/blocs/pierre/pierre1.png",
			},
			{
                "id":1,
				"name" : "pierre2",
				"image":"game/tiles/blocs/pierre/pierre2.png",
			},
			{
                "id":2,
				"name" : "pierre3",
				"image":"game/tiles/blocs/pierre/pierre3.png",
			},
			{
                "id":11,
				"name" : "pierre4",
				"image":"game/tiles/blocs/pierre/pierre4.png",
			},
			{
                "id":12,
				"name" : "pierre5",
				"image":"game/tiles/blocs/pierre/pierre5.png",
			},
			{
                "id":13,
				"name" : "pierre6",
				"image":"game/tiles/blocs/pierre/pierre6.png",
			},
			{
                "id":14,
				"name" : "pierre0",
				"image":"game/tiles/blocs/pierre/pierre0.png",
			}
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
