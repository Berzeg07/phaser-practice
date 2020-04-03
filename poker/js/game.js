function start() {
    var content = document.getElementById('content');
    content.classList.add('show');

    var stage = new Konva.Stage({
        container: 'gamefield', // идентификатор div контейнера
        width: 800,
        height: 600
    });

    var layerBg = new Konva.Layer();
    stage.add(layerBg);
    stage.draw();

    var bgMain = new Image();
    bgMain.src = "img/bg.jpg";

    bgMain.onload = function() {
        var field = new Konva.Image({
            x: 0,
            y: 0,
            image: bgMain,
            width: 800,
            height: 600
        });

        layerBg.add(field);
        layerBg.draw();
    };

    var cardObj = {
        joker: undefined,
        king: undefined,
        qeen: undefined
    }

    var layerGetCards = [];

    var cardLayerObj = {
        layerJoker: undefined,
        layerKing: undefined,
        layerQeen: undefined
    }

    for (var key in cardLayerObj) {
        layerGetCards.push(key);
        cardLayerObj[key] = new Konva.Layer();
        stage.add(cardLayerObj[key]);
        stage.draw();
    }

    for (var key in cardObj) {
        cardObj[key] = new Image();
        cardObj[key].src = 'img/' + key + '.png';
    }

    var card1;

    cardObj.joker.onload = function() {
        card1 = new Konva.Image({
            x: 10,
            y: 160,
            image: cardObj.joker,
            width: 100,
            height: 140,
            // name: joker
        });



        cardLayerObj.layerJoker.add(card1);
        cardLayerObj.layerJoker.draw();
    };

    function move(layer, y) {
        // var dx = 90;
        var dy = 0;
        if (y > 0) {
            dy += y;
        }

        var tween = new Konva.Tween({
            node: layer, //имя фигуры, которую будем анимировать
            duration: 0.4, //продолжительность
            // x: dx, //координата x
            y: dy, //координата y
        });
        tween.play();
        // layerGetCards.shift();
    }

    var card2;

    cardObj.king.onload = function() {
        card2 = new Konva.Image({
            x: 10,
            y: 180,
            image: cardObj.king,
            width: 100,
            height: 140
        });

        // card2.cache();
        // card2.drawHitFromCache();
        // card2.on('click', function() {
        //     move(card2, 20);
        // });

        cardLayerObj.layerKing.add(card2);
        cardLayerObj.layerKing.draw();
    };

    var card3;

    cardObj.qeen.onload = function() {
        card3 = new Konva.Image({
            x: 10,
            y: 200,
            image: cardObj.qeen,
            width: 100,
            height: 140
        });

        // card3.cache();
        // card3.drawHitFromCache();
        // card3.on('click', function() {
        //     move(card3, 40);
        // });

        cardLayerObj.layerQeen.add(card3);
        cardLayerObj.layerQeen.draw();
    };

    // card3.on("click", function() {
    //     alert('карта 3');
    // });
    // card3.on("mouseenter", function() {
    //     stage.container().style.cursor = "pointer";
    // });
    // card3.on("mouseleave", function() {
    //     stage.container().style.cursor = "default";
    // });

    var playerCard = 0;
    var btn = document.getElementById('getCard');
    var dx = 190;
    var dy = 220;

    var playerCardArr = [];
    console.log(layerGetCards);

    btn.addEventListener('click', function() {
        var layerGetCardsLength = layerGetCards.length;
        var getCard = layerGetCards[0];

        if (layerGetCardsLength != 0) {
            playerCard++;

            playerCardArr.push(getCard);
            console.log(playerCardArr);

            if (playerCard > 1) {
                dx += 120;
                dy -= 20;
            }
            var tween = new Konva.Tween({
                node: cardLayerObj[getCard], //имя фигуры, которую будем анимировать
                duration: 0.4, //продолжительность
                x: dx, //координата x
                y: dy, //координата y
            });
            tween.play();
            layerGetCards.shift();
        } else {
            alert('Карт больше нет!')
        }
        for (var i = 0; i < playerCardArr.length; i++) {
            var key = playerCardArr[i];
            if (key == 'layerJoker') {
                card1.cache();
                card1.drawHitFromCache();
                card1.on('click', function() {
                    move(card1, 0);
                });
            } else if (key == 'layerKing') {
                card2.cache();
                card2.drawHitFromCache();
                card2.on('click', function() {
                    move(card2, 20);
                });
            }else if (key == 'layerQeen') {
                card3.cache();
                card3.drawHitFromCache();
                card3.on('click', function() {
                    move(card3, 40);
                });
            }
            cardLayerObj[key].on("mouseenter", function() {
                stage.container().style.cursor = "pointer";
            });
            cardLayerObj[key].on("mouseleave", function() {
                stage.container().style.cursor = "default";
            });

            // stage.draw();
        }
        // cardLayerObj.layerKing.off();
    });
}

var startBtn = document.getElementById('start');
var modal = document.getElementById('modal');
startBtn.addEventListener('click', function(){
    modal.classList.add('hide');
    start();
});
