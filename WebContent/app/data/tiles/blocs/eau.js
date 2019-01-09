'use strict';
define([], function(){
	var data = [
            {
                "id":0,
            	"name" : "eau1",
             	"image":"game/tiles/blocs/eau/eau1.png",
            },
			{
                "id":1,
				"name" : "eau2",
				"image":"game/tiles/blocs/eau/eau2.png",
			},
			{
                "id":2,
				"name" : "eau3",
				"image":"game/tiles/blocs/eau/eau3.png",
			},
			{
                "id":3,
				"name" : "eau4",
				"image":"game/tiles/blocs/eau/eau4.png",
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
