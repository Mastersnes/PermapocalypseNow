'use strict';
define([], function(){
	var data = [
            {
            	"id" : 0,
            	"name" : "barriere1",
                "type":"elements"
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
            scene.load.setBaseURL('app/img/game/tiles/elements');
            scene.load.multiatlas('barriere', 'barriere/barriere.json', 'barriere');
		}
	};
});
