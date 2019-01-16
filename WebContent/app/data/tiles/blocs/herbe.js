'use strict';
define([], function(){
	var data = [
            {
                "id":0,
            	"name" : "herb1",
                "type":"blocs"
            },
            {
                "id":5,
                "name" : "herb2",
                "type":"blocs"
            },
            {
                "id":1,
                "name" : "herb3",
                "type":"blocs"
            },
			{
                "id":3,
				"name" : "herb4",
                "type":"blocs"
			},
			{
                "id":4,
				"name" : "herb5",
                "type":"blocs"
			},
			{
                "id":18,
				"name" : "ter0",
                "type":"blocs"
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
