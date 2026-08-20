<script>
const quizData = [
    { question: "1. Assinale a alternativa que preenche corretamente a lacuna: 'Vou ___ Bahia no próximo final de semana.'", options: ["a", "à", "há", "às"], correct: 1, explanation: "Quem vai 'a' e volta 'da', crase no 'A'! (Volto DA Bahia -> Vou À Bahia)." },
    { question: "2. Em qual das opções o uso da crase é PROIBIDO?", options: ["Entreguei o documento à diretora.", "Ele começou à falar sem parar.", "Chegamos à uma hora da tarde.", "Referia-se à aluna mais dedicada."], correct: 1, explanation: "É proibido usar crase antes de verbos ('falar')." },
    { question: "3. Assinale a frase em que o uso da crase é FACULTATIVO:", options: ["Dirigi-me à professora.", "Refiro-me à sua irmã.", "Chegamos à noite.", "Fomos à praia ontem."], correct: 1, explanation: "O uso da crase é facultativo antes de pronomes possessivos femininos acompanhados de substantivo ('sua irmã')." },
    { question: "4. Preencha as lacunas: 'Ofereci um presente ___ minha mãe e recorri ___ uma médica.'", options: ["à / à", "a / a", "à / a", "a / à"], correct: 2, explanation: "Antes de 'minha' o uso é facultativo (à/a). Antes do artigo indefinido 'uma', a crase é proibida (a)." },
    { question: "5. Em qual frase a crase ocorre devido a uma locução adverbial feminina de tempo?", options: ["Fiz o trabalho à mão.", "Chegamos às pressas.", "Às cinco horas, a aula começará.", "Ele ficou à toa o dia todo."], correct: 2, explanation: "'Às cinco horas' expressa horas exatas (tempo). 'Às pressas' e 'à mão' são modo." },
    { question: "6. Marque a alternativa correta em relação à palavra 'terra':", options: ["Os marinheiros voltaram à terra firme.", "Os marinheiros voltaram a terra.", "Os marinheiros voltaram à terra natal.", "As alternativas B e C estão corretas."], correct: 3, explanation: "'Terra' no sentido de solo firme não recebe crase. Quando especificada ('terra natal'), recebe crase." },
    { question: "7. 'Escreveu um texto ___ Machado de Assis.' Qual a forma correta?", options: ["a", "à", "há", "às"], correct: 1, explanation: "Usa-se crase pois está subentendida a locução 'à moda de' (à [moda de] Machado de Assis), mesmo antes de nome masculino." },
    { question: "8. Assinale a opção incorreta quanto ao uso do sinal indicativo de crase:", options: ["Fiquei frente à frente com o leão.", "Saímos à procura de novos caminhos.", "À medida que estudava, aprendia mais.", "Ele falou à aluna sobre o exame."], correct: 0, explanation: "Não se usa crase entre palavras repetidas ('frente a frente')." },
    { question: "9. Preencha: 'Ele foi ___ Roma dos imperadores.'", options: ["a", "à", "há", "da"], correct: 1, explanation: "Nomes de lugares que normalmente não exigem artigo passarão a exigir se estiverem especificados/modificados ('Roma dos imperadores')." },
    { question: "10. 'Caminhamos até ___ praia.' O uso da crase é:", options: ["Obrigatório", "Proibido", "Facultativo", "Inexistente na norma culta"], correct: 2, explanation: "Após a preposição 'até', o uso da preposição 'a' (e consequentemente da crase) é facultativo." },
    { question: "11. Marque a frase correta:", options: ["Entregou o prêmio à quem venceu.", "Enviei a encomenda à todas as lojas.", "Ela não se refere à pessoas estranhas.", "Pediu a ajuda à amiga mais próxima."], correct: 3, explanation: "Não há crase antes de 'quem' ou 'todas'. 'A' no singular antes de plural ('pessoas') também impede a crase. 'À amiga' está correto." },
    { question: "12. Qual das expressões prepositivas femininas exige crase?", options: ["A custa de", "A procura de", "A medida que", "Todas as anteriores exigem crase (À custa de, À procura de, À medida que)"], correct: 3, explanation: "Locuções prepositivas e conjuntivas femininas recebem acento grave: 'à custa de', 'à procura de', 'à medida que'." },
    { question: "13. Preencha corretamente: 'Daqui ___ pouco, vamos ___ casa de João.'", options: ["a / a", "à / à", "a / à", "há / a"], correct: 2, explanation: "'Daqui a pouco' indica tempo futuro (sem crase). 'Casa' especificada ('de João') exige crase." },
    { question: "14. 'Diga ___ ela que cheguei ___ tempo.'", options: ["a / a", "à / a", "a / à", "à / à"], correct: 0, explanation: "Não se usa crase antes de pronome pessoal ('ela') nem antes de palavra masculina ('tempo')." },
    { question: "15. 'Assistimos ___ peça de teatro que estreou ontem.'", options: ["a", "à", "na", "da"], correct: 1, explanation: "O verbo 'assistir' no sentido de ver/presenciar exige a preposição 'a'. Juntando com o artigo 'a' de 'peça', temos 'à'." },
    { question: "16. Qual frase está INCORRETA?", options: ["Prefiro ir ao cinema à ir ao teatro.", "Comprei o livro a prazo.", "Pagou a conta a dinheiro.", "Prefiro o cinema ao teatro."], correct: 0, explanation: "Não se usa crase antes de verbo ('ir'). O verbo 'preferir' exige a preposição 'a', sem crase antes de verbos." },
    { question: "17. 'A reunião será das 14h ___ 18h.'", options: ["a", "às", "as", "até"], correct: 1, explanation: "Quando há a combinação 'das... às...', usa-se crase indicando a fusão da preposição 'a' com o artigo 'as'." },
    { question: "18. Em qual dos casos o uso da crase altera o sentido da frase?", options: ["Chegou a noite. / Chegou à noite.", "Vou a festa. / Vou à festa.", "Refiro-me a aluna. / Refiro-me à aluna.", "Pediu a ela. / Pediu à ela."], correct: 0, explanation: "'Chegou a noite' = A noite chegou (sujeito). 'Chegou à noite' = Chegou durante o período noturno (adjunto adverbial de tempo)." },
    { question: "19. 'Ficamos a observar a tempestade ___ distância de cem metros.'", options: ["a", "à", "da", "há"], correct: 1, explanation: "A palavra 'distância' leva crase se estiver determinada/especificada ('distância de cem metros')." },
    { question: "20. Preencha as lacunas: 'Comuniquei ___ diretora que iria ___ Paris no mês que vem.'", options: ["a / a", "à / a", "à / à", "a / à"], correct: 1, explanation: "Comunicar algo A alguém ('à diretora'). Quem vai A Paris volta DE Paris (sem crase antes de Paris)." }
];

let currentIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);

function loadQuestion() {
    const q = quizData[currentIndex];
    
    document.getElementById('q-number-label').innerText = `Questão ${currentIndex + 1}`;
    document.getElementById('q-text').innerText = q.question.replace(/^\d+\.\s*/, '');
    document.getElementById('current-q-num').innerText = `${currentIndex + 1} / ${quizData.length}`;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];
    const selectedAnswer = userAnswers[currentIndex];

    q.options.forEach((opt, idx) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        
        // Mantém as cores caso a questão já tenha sido respondida
        if (selectedAnswer !== null) {
            li.classList.add('disabled');
            if (idx === q.correct) li.classList.add('correct');
            if (idx === selectedAnswer && selectedAnswer !== q.correct) li.classList.add('incorrect');
        } else {
            li.onclick = () => selectOption(idx);
        }

        li.innerHTML = `
            <span class="option-prefix">${prefixes[idx]}</span>
            <span class="option-text">${opt}</span>
        `;
        optionsList.appendChild(li);
    });

    const expBox = document.getElementById('exp-text');
    if (selectedAnswer !== null) {
        expBox.style.display = 'block';
        expBox.innerHTML = `<strong>Explicação:</strong> ${q.explanation}`;
    } else {
        expBox.style.display = 'none';
    }

    // Atualiza botões
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    
    const nextBtn = document.getElementById('next-btn');
    if (currentIndex === quizData.length - 1) {
        nextBtn.innerText = "Finalizar Quiz";
    } else {
        nextBtn.innerText = "Próxima";
    }

    updateStats();
}

function selectOption(optIndex) {
    if (userAnswers[currentIndex] !== null) return;

    userAnswers[currentIndex] = optIndex;
    loadQuestion();
}

function nextQuestion() {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function updateStats() {
    let correctCount = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === quizData[idx].correct) correctCount++;
    });

    document.getElementById('score-q').innerText = correctCount;
    
    const progressPct = ((currentIndex + 1) / quizData.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPct}%`;
}

function finishQuiz() {
    let correctCount = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === quizData[idx].correct) correctCount++;
    });

    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('nav-actions').style.display = 'none';

    const modal = document.getElementById('result-modal');
    document.getElementById('final-score').innerText = `${correctCount}/${quizData.length}`;

    const msg = document.getElementById('final-message');
    if (correctCount === 20) msg.innerText = "Parabéns! Excelente domínio de todas as regras de crase!";
    else if (correctCount >= 15) msg.innerText = "Muito bom! Você possui um ótimo conhecimento sobre o assunto.";
    else if (correctCount >= 10) msg.innerText = "Bom trabalho, mas vale a pena revisar alguns casos especiais.";
    else msg.innerText = "Continue praticando! A crase exige atenção às regras de regência.";

    modal.style.display = 'block';
}

function resetQuiz() {
    userAnswers = new Array(quizData.length).fill(null);
    currentIndex = 0;
    document.getElementById('result-modal').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';
    document.getElementById('nav-actions').style.display = 'flex';
    loadQuestion();
}

window.onload = loadQuestion;
</script>
