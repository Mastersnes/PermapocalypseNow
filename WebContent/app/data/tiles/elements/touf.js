'use strict';
define([], function(){
	var data = [
            {
                "id" : 0,
            	"name" : "touf1",
                "type":"elements"
            },
			{
				"id" : 1,
				"name" : "touf2",
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
            scene.load.multiatlas('touf', 'touf/touf.json', 'touf');
		}
	};
});
