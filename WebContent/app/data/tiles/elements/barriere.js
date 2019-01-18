'use strict';
define([], function(){
    var data = [
            {
            	"id" : 0,
            	"name" : "barriere1",
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

        /**
         * Getters
         */
        type : function() {
            return "elements";
        },
        name : function() {
            return "barriere";
        }
	};
});
