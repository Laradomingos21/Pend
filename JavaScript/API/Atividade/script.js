const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

//objeto . api. método
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        const latitude = document.querySelector("#latitude");
        latitude.innerHTML = 'Latitude: ' + posicao.coords.latitude;

        const longitude = document.querySelector("#longitude");
        longitude.innerHTML = "Longitude: " + posicao.coords.longitude;

        const precisao = document.querySelector("#precisao");
        precisao.innerHTML = "Precisão: " + posicao.coords.accuracy;
    },
    function (erro) {
        console.log("Não foi possível obter a localização. ", erro);
        document.querySelector("#latitude").innerHTML = "Erro ao obter localização.";
    }
);

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera: ", erro);
});

botao.addEventListener("click", function () {

    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height,
    );

    foto.src = canvas.toDataURL("image/png");
})