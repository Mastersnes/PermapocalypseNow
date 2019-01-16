'use strict';
define([], function(){
	var data = [
			{
                "id":0,
				"name" : "pierre1",
                "type":"blocs"
			},
			{
                "id":1,
				"name" : "pierre2",
                "type":"blocs"
			},
			{
                "id":2,
				"name" : "pierre3",
                "type":"blocs"
			},
			{
                "id":11,
				"name" : "pierre4",
                "type":"blocs"
			},
			{
                "id":12,
				"name" : "pierre5",
                "type":"blocs"
			},
			{
                "id":13,
				"name" : "pierre6",
                "type":"blocs"
			},
			{
                "id":14,
				"name" : "pierre0",
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
