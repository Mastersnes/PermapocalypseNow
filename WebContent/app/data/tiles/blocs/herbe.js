'use strict';
define([], function(){
	var data = [
            {
                "id":0,
            	"name" : "herb1",
             	"image":"game/tiles/blocs/herbe/herb1.png",
            },
            {
                "id":5,
                "name" : "herb2",
                "image":"game/tiles/blocs/herbe/herb2.png",
            },
            {
                "id":1,
                "name" : "herb3",
                "image":"game/tiles/blocs/herbe/herb3.png",
            },
			{
                "id":3,
				"name" : "herb4",
				"image":"game/tiles/blocs/herbe/herb4.png",
			},
			{
                "id":4,
				"name" : "herb5",
				"image":"game/tiles/blocs/herbe/herb5.png",
			},
			{
                "id":18,
				"name" : "ter0",
				"image":"game/tiles/blocs/herbe/ter0.png",
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
