var Game = {};

Game.Boot = function(game){};
Game.Boot.prototype.preload = function(){};
Game.Boot.prototype.create = function(){
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.canvas.id = 'canvas';
    this.game.state.start('Preload');
};
