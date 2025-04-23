const questions = [
    {
        question: "Berapakah hasil dari 6 + 7?",
        choices: ["11", "12", "13", "14"],
        answer: 2,
        explanation: "6 + 7 = 13"
    },
    {
        question: "Berapakah hasil dari 9 x 3?",
        choices: ["27", "18", "36", "24"],
        answer: 0,
        explanation: "9 x 3 = 27"
    },
    {
        question: "Berapakah hasil dari 20 - 8?",
        choices: ["12", "14", "10", "15"],
        answer: 0,
        explanation: "20 - 8 = 12"
    }
];

let currentQuestion = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    document.getElementById("feedback").innerText = "";

    q.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.innerText = choice;
        btn.className = "choice";
        btn.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    if (index === q.answer) {
        feedback.innerText = "Benar! " + q.explanation;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Salah. " + q.explanation;
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "<h2>Selamat! Kamu telah menyelesaikan semua soal!</h2>";
        document.getElementById("feedback").innerText = "";
    }
}

window.onload = showQuestion;
