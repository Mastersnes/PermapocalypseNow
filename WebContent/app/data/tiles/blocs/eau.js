'use strict';
define([], function(){
	var data = [
            {
            	"name" : "eau1",
             	"image":"game/tiles/blocs/eau/eau1.png",
            },
			{
				"name" : "eau2",
				"image":"game/tiles/blocs/eau/eau2.png",
			},
			{
				"name" : "eau3",
				"image":"game/tiles/blocs/eau/eau3.png",
			},
			{
				"name" : "eau4",
				"image":"game/tiles/blocs/eau/eau4.png",
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
