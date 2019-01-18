'use strict';
define([], function(){
    var data = [
            {
                "id" : 0,
            	"name" : "touf1",
            },
			{
				"id" : 1,
				"name" : "touf2",
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
            return "touf";
        }
	};
});
