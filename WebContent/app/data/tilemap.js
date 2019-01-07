'use strict';
define(["app/data/tilesets"], function(Tilesets){
	var layers = [
		  {
			  "name":"sous-sol",
			  "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 19, 0, 0, 0, 19, 19, 0],
			  "width":10,
			  "opacity":1,
			  "x":0, "y":0
		  },
		{
            "name":"sol",
            "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 0, 0, 0, 0, 0, 25, 26, 37, 37, 6, 6, 0, 0, 0, 26, 26, 22, 21, 35, 0, 1, 0, 0, 2, 26, 0, 23, 23, 22, 35, 25, 6, 0, 4, 37, 22, 23, 20, 22, 0, 37, 6, 0, 4, 24, 37, 22, 22, 35, 37, 26, 0, 0, 6, 1, 25, 35, 36, 24, 6, 4, 0, 0, 0, 5, 2, 5, 2, 4, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0],
			"width":10,
            "opacity":1,
            "x":0, "y":0
        },
        {
            "name":"dessus",
            "data":[0, 0, 0, 0, 39, 39, 39, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 2147483687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2147483687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2147483687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2147483687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"width":10,
            "opacity":1,
            "x":0, "y":0
        }
    ];
	
	return {
		get : function(key) {
			return layers[key];
		},
		list : function() {
			return layers;
		},
        load : function(scene) {
            Tilesets.Herbe().load(scene);
            Tilesets.Eau().load(scene);
            Tilesets.Pierre().load(scene);
            Tilesets.Barriere().load(scene);
            Tilesets.Rocher().load(scene);
        },
        getTile : function(id) {
			if (id >=1) return Tilesets.Herbe().get(id-1);
			if (id >=20) return Tilesets.Eau().get(id-20);
			if (id >=24) return Tilesets.Pierre().get(id-24);
			if (id >=39) return Tilesets.Barriere().get(id-39);
			if (id >=40) return Tilesets.Rocher().get(id-40);
		},

        /**
		 * Proportions basique des tuiles de la map
         */
        w : function() {
            return 196;
        },
        h : function() {
            return 112;
        },
        H : function() {
            return 226;
        }
	};
});
