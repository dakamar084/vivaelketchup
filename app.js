let player; // variable global del reproductor

document.addEventListener("DOMContentLoaded", function () {
    var span = document.querySelector("span.tiempo");
    var tiempo = parseInt(span.innerHTML);

    var intervalo = setInterval(() => {
        tiempo--;

        if (tiempo < 0) {
            clearInterval(intervalo);
            resto();
            return;
        }

        span.innerHTML = tiempo;
    }, 1000);
});

function resto() {

    let videoIds = [
        'vbaLVwfDpeU',
        'hzUZH3VL3Gg',
        'h9LvjIc_gXs',
        'vbaLVwfDpeU',
        'SIaFtAKnqBU',
        'NSU2hJ5wT08',
        'QB7ACr7pUuE'
    ];

    var pos = Math.floor(Math.random() * videoIds.length);
    var videoSeleccionado = videoIds[pos];

    const paso1 = document.querySelector(".paso1");
    const paso2 = document.querySelector(".paso2");

    paso1.style.display = "none";
    paso2.style.display = "block";
    document.querySelector(".main").classList.add("sinPadding");

    // Cargamos API de YouTube
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = function () {

        player = new YT.Player(paso2, {
            videoId: videoSeleccionado,
            playerVars: {
                autoplay: 1,
                mute: 1,
                loop: 1,
                playlist: videoSeleccionado,
                controls: 0,
                modestbranding: 1,
                rel: 0
            },
            events: {
                'onReady': function (event) {
                    event.target.playVideo();
                }
            }
        });

        activarSonidoAlClick();
    };
}

function activarSonidoAlClick() {

    const pulsador = document.querySelector(".pulsador");

    // Hacemos que el pulsador cubra todo
    pulsador.style.position = "absolute";
    pulsador.style.top = 0;
    pulsador.style.left = 0;
    pulsador.style.width = "100%";
    pulsador.style.height = "100%";
    pulsador.style.zIndex = 10;
    pulsador.style.cursor = "pointer";

    player.unMute()
}
