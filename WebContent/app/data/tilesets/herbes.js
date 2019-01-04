'use strict';
define([], function(){
	var data = [
            {
            	"name" : "herbe",
             	"image":"game/tiles/herbe.png",
            },
            {
                "name" : "herbe1",
                "image":"game/tiles/herbe1.png",
                "H" : 227,
            },
            {
                "name" : "herbe2",
                "image":"game/tiles/herbe2.png",
                "H" : 227,
            }
	];
	
	return {
		w : function() {
			return 196;
		},
        h : function() {
            return 112;
        },
        H : function() {
            return 226;
        },
		get : function(key) {
			return data[key];
		},
		list : function(key) {
			return data;
		},
		load : function(scene) {
			for (var id in data) {
				var tile = data[id];
				console.log("load", tile.name, tile.image, scene);
                scene.load.image(tile.name, tile.image);
			}
		}
	};
});
