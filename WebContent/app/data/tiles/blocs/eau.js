'use strict';
define([], function(){
	var data = [
            {
                "id":0,
            	"name" : "eau1",
             	"type":"blocs"
            },
			{
                "id":1,
				"name" : "eau2",
                "type":"blocs"
			},
			{
                "id":2,
				"name" : "eau3",
                "type":"blocs"
			},
			{
                "id":3,
				"name" : "eau4",
                "type":"blocs"
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
