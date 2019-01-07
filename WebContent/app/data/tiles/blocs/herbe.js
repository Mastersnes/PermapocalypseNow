'use strict';
define([], function(){
	var data = [
            {
            	"name" : "herb1",
             	"image":"game/tiles/blocs/herbe/herb1.png",
            },
            {
                "name" : "herb2",
                "image":"game/tiles/blocs/herbe/herb2.png",
            },
            {
                "name" : "herb3",
                "image":"game/tiles/blocs/herbe/herb3.png",
            },
			{
				"name" : "herb4",
				"image":"game/tiles/blocs/herbe/herb4.png",
			},
			{
				"name" : "herb5",
				"image":"game/tiles/blocs/herbe/herb5.png",
			},
			{
				"name" : "ter0",
				"image":"game/tiles/blocs/herbe/ter0.png",
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
