let player;

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

    // Insertamos contenedor del player
    paso2.innerHTML = `
        <div id="player"></div>
        
    `;
    document.querySelector(".pulsador").classList.remove("oculto")
    // Cargar API si no está cargada
    if (!window.YT) {
        let tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = function () {
        crearPlayer(videoSeleccionado);
    };

    // Si ya estaba cargada la API
    if (window.YT && window.YT.Player) {
        crearPlayer(videoSeleccionado);
    }
}

function crearPlayer(videoId) {

    player = new YT.Player("player", {
        width: "100%",
        height: "315",
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            modestbranding: 1,
            rel: 0
        },
        events: {
            onReady: function (event) {
                event.target.playVideo();

            }
        }
    });

    activarSonido();
}

function activarSonido() {

    const pulsador = document.querySelector(".pulsador");

    pulsador.addEventListener("click", function () {
        if (player && player.isMuted()) {
            player.unMute();
            pulsador.style.display = "none";
        }
    });
}