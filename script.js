const matrix = document.querySelector('.matrix');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const matrixColumns = Math.floor(window.innerWidth / 20); // Define a largura do efeito
const drops = [];

// Inicializa as colunas
for (let i = 0; i < matrixColumns; i++) {
    drops[i] = 1; // Inicia a altura de cada coluna
}

// Função para criar o efeito de código
function draw() {
    let output = '';
    for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        output += char + '<br/>';

        // Reinicia a altura se necessário
        if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0; // Reinicia a queda
        }

        // Aumenta a altura da coluna
        drops[i]++;
    }
    matrix.innerHTML = output;
}

// Atualiza a animação a cada 50ms
setInterval(draw, 50);
