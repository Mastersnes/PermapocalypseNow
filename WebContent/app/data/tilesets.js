'use strict';
define(["app/data/tiles/blocs/herbe",
    "app/data/tiles/blocs/eau",
    "app/data/tiles/blocs/pierre",
    "app/data/tiles/elements/barriere",
    "app/data/tiles/elements/rocher",
    "app/data/tiles/elements/cailloux",
    "app/data/tiles/elements/fleurs",
    "app/data/tiles/elements/touf"], function(Herbe, Eau, Pierre, Barriere, Rocher,
                                              Cailloux, Fleurs, Touf){
	return {
        Herbe : function() {
			return Herbe;
		},
        Eau : function() {
            return Eau;
        },
        Pierre : function() {
            return Pierre;
        },
        Barriere : function() {
            return Barriere;
        },
        Rocher : function() {
            return Rocher;
        },
        Cailloux : function() {
            return Cailloux;
        },
        Fleurs : function() {
            return Fleurs;
        },
        Touf : function() {
            return Touf;
        },

        load : function(scene, tileset) {
            var name = tileset.name();
            var path = "tiles/"+ tileset.type() +"/" + name;
            var json = name + ".json";
            scene.load.multiatlas(name, path+"/"+json, path);
        },
        render : function (group, iso, id, tileset) {
            var tile = tileset.get(id);
            if (tile)
                return group.create(iso.x, iso.y, tileset.name(), tile.name + ".png");
        }
	};
});
