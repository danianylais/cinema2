// ==================== MENU HAMBURGUER (RESPONSIVO) ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (opcional)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== EFEITO SONORO (CLAQUE) ====================
const somClaquete = document.getElementById('somClaquete');

// Função para tocar som (chamaremos em alguns lugares)
function tocarSomClaquete() {
    if (somClaquete) {
        somClaquete.currentTime = 0; // reinicia se já estiver tocando
        somClaquete.play().catch(e => console.log("Áudio bloqueado pelo navegador:", e));
    }
}

// ==================== RECOMENDAÇÃO DE FILMES ====================
const formRecomendacao = document.getElementById('formRecomendacao');
const resultadoRecomendacao = document.getElementById('resultadoRecomendacao');

formRecomendacao.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio do formulário

    // Pega os valores
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value;
    const humor = document.getElementById('humor').value;

    // Lógica simples de recomendação (você pode expandir)
    let filme = '';
    if (idade < 12) {
        if (genero === 'animacao') filme = 'Toy Story';
        else if (genero === 'comedia') filme = 'Meu Malvado Favorito';
        else filme = 'Procurando Nemo';
    } else if (idade >= 12 && idade < 18) {
        if (genero === 'acao') filme = 'Vingadores: Ultimato';
        else if (genero === 'terror') filme = 'Invocação do Mal';
        else if (genero === 'ficcao') filme = 'Interestelar';
        else filme = 'A Culpa é das Estrelas';
    } else {
        if (genero === 'drama') filme = 'O Poderoso Chefão';
        else if (genero === 'comedia') filme = 'As Branquelas';
        else if (genero === 'ficcao') filme = 'Blade Runner 2049';
        else filme = 'Tubarão';
    }

    // Ajusta pelo humor
    if (humor === 'triste' && !filme.includes('A Culpa')) filme = 'À Procura da Felicidade';
    if (humor === 'animado') filme = 'Os Embalos de Sábado à Noite';

    resultadoRecomendacao.innerHTML = `🍿 Recomendamos: <strong>${filme}</strong>`;

    // Toca o som da claquete
    tocarSomClaquete();
});

// ==================== QUIZ ====================
const quizForm = document.getElementById('quizForm');
const resultadoQuiz = document.getElementById('resultadoQuiz');

quizForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Respostas corretas
    const respostas = { q1: 'a', q2: 'a', q3: 'b', q4: 'a', q5: 'a' };
    let acertos = 0;
    let total = 5;

    // Verifica cada pergunta
    for (let i = 1; i <= total; i++) {
        const questao = document.querySelector(`input[name="q${i}"]:checked`);
        if (questao && questao.value === respostas[`q${i}`]) {
            acertos++;
        }
    }

    resultadoQuiz.innerHTML = `Você acertou ${acertos} de ${total} perguntas. ${acertos === total ? '🎉 Cinéfilo de primeira!' : acertos >= 3 ? '👏 Bom conhecimento!' : '🍿 Que tal assistir mais filmes?'}`;

    // Toca som se acertar todas (opcional)
    if (acertos === total) tocarSomClaquete();
});

// ==================== FORMULÁRIOS DE INSCRIÇÃO / ASSINATURA / COMENTÁRIO ====================
const formInscricao = document.getElementById('formInscricao');
formInscricao.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por se inscrever! Você receberá novidades.');
    formInscricao.reset();
});

const formJornal = document.getElementById('formJornal');
formJornal.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Jornal assinado com sucesso! Confira seu e-mail.');
    formJornal.reset();
});

const formComentario = document.getElementById('formComentario');
formComentario.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Comentário enviado! Agradecemos sua opinião.');
    formComentario.reset();
});

// ==================== AVALIAÇÃO COM EMOJIS ====================
const emojis = document.querySelectorAll('.emojis-avaliacao span');
const notaEscolhida = document.getElementById('notaEscolhida');

emojis.forEach(emoji => {
    emoji.addEventListener('click', function() {
        const nota = this.getAttribute('data-nota');
        notaEscolhida.innerHTML = `Você avaliou com nota ${nota} - ${this.textContent}`;
        // Aqui você poderia enviar a nota para um servidor (mas é só um exemplo)

        // Toca som ao avaliar
        tocarSomClaquete();
    });
});

// ==================== EFEITO DE SCROLL SUAVE (para links do menu) ====================
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});