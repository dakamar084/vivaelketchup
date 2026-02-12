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

        // Actualizamos el número en el HTML
        span.innerHTML = tiempo;
    }, 1000);
});

function resto() {
    // Lista de IDs de videos de YouTube (el código después de v= o de embed/)
    let videoIds = [
        'vbaLVwfDpeU',
        'hzUZH3VL3Gg',
        'h9LvjIc_gXs',
        'vbaLVwfDpeU',
        'SIaFtAKnqBU',
        'NSU2hJ5wT08',
        'QB7ACr7pUuE'
    ];

    // Selección aleatoria
    var pos = Math.floor(Math.random() * videoIds.length);
    var videoSeleccionado = videoIds[pos];

    // Construcción del Iframe
    // Nota: He añadido autoplay=1. Algunos navegadores bloquean el sonido automático,
    // si el video no carga, añade &mute=1 después de autoplay=1
    var iframeHTML = `
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/${videoSeleccionado}?autoplay=1&mute=1&loop=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>`;

    // Inyectar y mostrar
    const paso1 = document.querySelector(".paso1");
    const paso2 = document.querySelector(".paso2");

    paso2.innerHTML = iframeHTML;
    paso1.style.display = "none";
    paso2.style.display = "block";

    document.querySelector(".main").classList.add("sinPadding")
}