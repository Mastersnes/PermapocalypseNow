'use strict';
define(["app/data/tiles/blocs/herbe",
    "app/data/tiles/blocs/eau",
    "app/data/tiles/blocs/pierre",
    "app/data/tiles/elements/barriere",
    "app/data/tiles/elements/rocher"], function(Herbe, Eau, Pierre, Barriere, Rocher){
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
        }
	};
});
