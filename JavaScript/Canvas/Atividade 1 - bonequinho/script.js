const canvas = document.querySelector("#canvas");

const contexto = canvas.getContext("2d");

// Cabeça do boneco
contexto.beginPath();
contexto.arc(300, 100, 25, 0, Math.PI * 2);
contexto.stroke();

// Corpo
contexto.beginPath();
contexto.moveTo(300, 125);
contexto.lineTo(300, 220);
contexto.stroke();

// Braço esquerdo
contexto.beginPath();
contexto.moveTo(300, 125);
contexto.lineTo(250, 155);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(300, 190);
contexto.lineTo(250, 155);
contexto.stroke();

// Braço direito
contexto.beginPath();
contexto.moveTo(300, 125);
contexto.lineTo(350, 185);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(370, 125);
contexto.lineTo(350, 185);
contexto.stroke();

// Perna esquerda
contexto.beginPath();
contexto.moveTo(300, 220);
contexto.lineTo(255, 290);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(255, 290);
contexto.lineTo(255, 320);
contexto.stroke();

// Perna direita
contexto.beginPath();
contexto.moveTo(300, 220);
contexto.lineTo(345, 290);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(345, 290);
contexto.lineTo(345, 320);
contexto.stroke();