'use strict';
define(["app/data/tilesets"], function(Tilesets){
	var layers = [
		  {
              "name":"sous-sol",
              "data":[
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 19, 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 19, 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 19,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 19,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 19, 0 ,
                  0, 0, 0, 0 , 0, 0, 0, 0 , 0 , 19,
                  0, 0, 0, 19, 0, 0, 0, 19, 19, 0
              ],
              "width":10,
              "opacity":1,
              "x":0, "y":0
		  },
		{
            "name":"sol",
            "data":[
                0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0,
                0, 0, 0 , 0 , 0 , 5 , 4 , 4 , 0 , 0,
                0, 0, 0 , 25, 26, 37, 37, 6 , 6 , 0,
                0, 0, 26, 26, 22, 21, 35, 0 , 1 , 0,
                0, 2, 26, 0 , 23, 23, 22, 35, 25, 6,
                0, 4, 37, 22, 23, 20, 22, 0 , 37, 6,
                0, 4, 24, 37, 22, 22, 35, 37, 26, 0,
                0, 6, 1 , 25, 35, 36, 24, 6 , 4 , 0,
                0, 0, 5 , 2 , 5 , 2 , 4 , 2 , 0 , 0,
                0, 0, 0 , 0 , 1 , 2 , 2 , 0 , 0 , 0
            ],
            "width":10,
            "opacity":1,
            "x":0, "y":0
        },
        {
            "name":"dessus",
            "data":[
                0         , 0 , 0 , 0, 39, 39, 39, 0 , 0, 0,
                0         , 0 , 40, 0, 0 , 0 , 0 , 40, 0, 0,
                0         , 40, 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                2147483687, 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                2147483687, 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                2147483687, 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                2147483687, 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                0         , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                0         , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0,
                0         , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0, 0
            ],
            "width":10,
            "opacity":1,
            "x":0, "y":0
        }
    ];

    var tilesets =[
        {
            "firstgid":1,
            "source": Tilesets.Herbe()
        },
        {
            "firstgid":20,
            "source": Tilesets.Eau()
        },
        {
            "firstgid":24,
            "source": Tilesets.Pierre()
        },
        {
            "firstgid":39,
            "source": Tilesets.Barriere()
        },
        {
            "firstgid":40,
            "source": Tilesets.Rocher()
        }];
	
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
        /**
         * Renvoi la tuile
         * @param tileId
         */
        getTile : function(tileId) {
            var tileset = this.getTilesetFromTuile(tileId);
            if (tileset) return tileset.source.get(tileId-tileset.firstgid)
		},

        /**
         * Permet de trouver le tileset qui se rapporte à la tuile
         * @param tileId
         */
        getTilesetFromTuile : function(tileId) {
		    var previousTileset = null;
		    var currentTileset;
		    for (var id in tilesets) {
		        currentTileset = tilesets[id];
		        if (id > 0) {
                    if (previousTileset.firstgid <= tileId && tileId < currentTileset.firstgid)
                        break;
                }
                previousTileset = tilesets[id];
            }
            return previousTileset;
        },

        width : function() {
            return layers[0].width;
        },
        height : function() {
            return layers[0].data / layers[0].width;
        },

        /**
		 * Proportions basique des tuiles de la map
         */
        w : function() {
            return 196;
        },
        h : function() {
            return 112;
        }
	};
});
