/*global define */
define(["app/utils/utils",
		"app/scenes/menu",
		"app/scenes/game"],
function(Utils, MenuScene, GameScene) {
	'use strict';

	return function(Phaser) {
		this.init = function(Phaser) {
			var menuScene = new MenuScene(Phaser);
			var gameScene = new GameScene(Phaser);

			console.log("init phaser ", menuScene.scene, gameScene.scene);

			this.game = new Phaser.Game({
		        type: Phaser.AUTO,
		        width: 1024,
		        height: 768,
                physics: {default: 'arcade'},
		        scene: [menuScene.scene, gameScene.scene]
		    });
			this.game.scene.start("menu");
		};
		
		this.init(Phaser);
	};
});