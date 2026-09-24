function carregarClima() {

    const latitude = -21.4678;
    const longitude = -47.0047;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=America%2FSao_Paulo`;

    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }

            return resposta.json();
        })

        .then(dados => {

            const temperatura = dados.current.temperature_2m;
            const codigoClima = dados.current.weather_code;
            const icone = obterIconeClima(codigoClima);

            document.getElementById("temperatura").textContent =
                `${temperatura}°C`;

            document.getElementById("icone-clima").textContent =
                icone;
        })

        .catch(erro => {

            console.error("Erro ao carregar o clima:", erro);

            document.getElementById("temperatura").textContent = "--°C";
            document.getElementById("icone-clima").textContent = "🌡️";
        });
}

function obterIconeClima(codigo) {

    if (codigo === 0) {
        return "☀️";
    }

    if (codigo >= 1 && codigo <= 3) {
        return "⛅";
    }

    if (codigo >= 45 && codigo <= 48) {
        return "🌫️";
    }

    if (codigo >= 51 && codigo <= 67) {
        return "🌧️";
    }

    if (codigo >= 71 && codigo <= 77) {
        return "❄️";
    }

    if (codigo >= 80 && codigo <= 82) {
        return "🌦️";
    }

    if (codigo >= 95 && codigo <= 99) {
        return "⛈️";
    }

    return "🌤️";
}

carregarClima();
setInterval(carregarClima, 3600000);

//hamburguer
const botaoMenu = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("aberto");
});