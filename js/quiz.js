const questions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "Java"],
        answer: 1
    },
    {
        question: "JavaScript is used for?",
        options: ["Structure", "Styling", "Interactivity"],
        answer: 2
    }
];

window.onload = function () {
    let quizDiv = document.getElementById("quiz");

    questions.forEach((q, index) => {
        let html = `<p><b>${index + 1}. ${q.question}</b></p>`;
        q.options.forEach((opt, i) => {
            html += `
                <input type="radio" name="q${index}" value="${i}">
                ${opt}<br>
            `;
        });
        quizDiv.innerHTML += html + "<br>";
    });
};

function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / " + questions.length;
}
