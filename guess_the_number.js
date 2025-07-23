function guessTheNumber() {
    alert('Добро пожаловать в игру Угадай число');
    alert('Будет загодано число от 1 до 100');
    alert('НАЧАТЬ!!!');
    let gameNum = Math.floor(Math.random() * 1000) + 1;
    let userNum = Number(prompt('Угадай число'));
    let n = 0;
    while (userNum != gameNum) {
        if (isNaN(userNum)) {
            alert('Переданный параметр не является числом');
        } else if (userNum < gameNum) {
            alert('больше');
        } else {
            alert('меньше');
        }
        userNum = Number(prompt('Попробуй ещё раз, ты близко'));
        n++;    
    } 
    if (userNum == gameNum) {
        alert(`Победа!!! Это число ${userNum}, потрачено попыток ${n}`);
    }
}