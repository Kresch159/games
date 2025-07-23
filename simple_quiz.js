// simple quiz Простая викторина
function simpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: [2, 'синий']
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: [2, 'семь', 7]
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: [2, 'пять', 5]
        }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        let message = quiz[i].question + "\n";
        for (let j = 0; j < quiz[i].options.length; j++) {
            message += quiz[i].options[j] + "\n";
        }
        let userAnswer = prompt(message);

        if (userAnswer === null) return;

        userAnswer = userAnswer.trim().toLowerCase();

        // Приводим все варианты правильных ответов к строке и нижнему регистру
        let possibleAnswers = quiz[i].correctAnswer.map(a => String(a).toLowerCase());

        if (possibleAnswers.includes(userAnswer)) {
            correctCount++;
        }
    }

    alert("Правильных ответов: " + correctCount + " из " + quiz.length);
}
