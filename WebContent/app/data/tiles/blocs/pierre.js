'use strict';
define([], function(){
    var data = [
			{
                "id":0,
				"name" : "pierre1",
			},
			{
                "id":1,
				"name" : "pierre2",
			},
			{
                "id":2,
				"name" : "pierre3",
			},
			{
                "id":11,
				"name" : "pierre4",
			},
			{
                "id":12,
				"name" : "pierre5",
			},
			{
                "id":13,
				"name" : "pierre6",
			},
			{
                "id":14,
				"name" : "pierre0",
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
            return "pierre";
        }
	};
});
