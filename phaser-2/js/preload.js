Game.Preload = function(game){};
Game.Preload.prototype.preload = function(){
    this.load.image('char', 'img/p1.png');
    this.load.image('platform', 'img/platform.png');
    game.stage.background = '#85b5e1';
};
Game.Preload.prototype.create = function(){
    this.game.start('Main');
}
