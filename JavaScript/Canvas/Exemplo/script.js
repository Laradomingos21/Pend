const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

// Desenha uma linha
contexto.beginPath(); //"vou começar um novo caminho/novo desenho (para linha e circulo)"
contexto.moveTo(10, 0); // Define onde a linha começa moveTo(x, y)
contexto.lineTo(50, 300); //Define onde a linha termina
contexto.stroke(); //Desenha o caminha/linha

//Retângulo
contexto.fillRect(50, 50, 150, 100); //um retângulo preenchido (x, y, largura, altura)
contexto.strokeRect(250, 50, 150, 100); // um retângulo só com bordas

//Circulo
contexto.beginPath();
contexto.arc(500, 100, 50, 0, Math.PI * 2); // x, y, raio, *anguloInicial, *anguloFinal (Math.Pi * 2 - Math.3,14 * 2) 
contexto.stroke();

//metade do circulo e por conta do true, a metade ta invertida
contexto.beginPath();
contexto.arc(640, 100, 50, 0, Math.PI, true); // o true inverte
contexto.stroke();
