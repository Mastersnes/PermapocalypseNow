'use strict';
define([], function(){
	var data = [
            {
                "id":0,
            	"name" : "eau1"
            },
			{
                "id":1,
				"name" : "eau2"
			},
			{
                "id":2,
				"name" : "eau3"
			},
			{
                "id":3,
				"name" : "eau4"
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
		    return "blocs";
        },
        name : function() {
            return "eau";
        }
	};
});
