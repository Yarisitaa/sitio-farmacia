document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".mvo");

    function mostrarElementos() {
        elementos.forEach((el) => {
            const posicion = el.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.3;
            if (posicion < alturaPantalla) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
});
