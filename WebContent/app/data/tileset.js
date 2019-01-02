'use strict';
define([], function(){
	var data = [
            {
             "image":"herbe",
            }, 
            {
             "image":"herbe1",
            }, 
            {
             "image":"herbe2",
            }
	];
	
	return {
		width : function() {
			return 196;
		},
		height : function() {
			return 112;
		},
		get : function(key) {
			return data[key];
		},
		list : function(key) {
			return data;
		},
		getByName : function(key) {
			for (var id in data) {
				var tile = data[id];
				if (tile.image == key) return tile;
			}
			return null;
		}
	};
});
