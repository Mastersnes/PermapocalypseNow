'use strict';
define([], function(){
    var data = [
            {
                "id":0,
            	"name" : "herb1",
            },
            {
                "id":5,
                "name" : "herb2",
            },
            {
                "id":1,
                "name" : "herb3",
            },
			{
                "id":3,
				"name" : "herb4",
			},
			{
                "id":4,
				"name" : "herb5",
			},
			{
                "id":18,
				"name" : "ter0",
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

        /**
         * Getters
         */
        type : function() {
            return "blocs";
        },
        name : function() {
            return "herbe";
        }
	};
});
