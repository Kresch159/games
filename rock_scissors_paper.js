//Rock, scissors, paper

function rockScissorsPaper() {
    const select=["камень", "ножницы", "бумага"];
    const userSelect=prompt('Выбери: камень, ножницы или бумага?').toLowerCase();
    if (userSelect===null) return;

    if (!select.includes(userSelect)) {
        alert('Ошибка: введи камень, ножницы или бумага.');
    } else {
        const computerRandomSelect=select[Math.floor(Math.random()*3)];
        let result='';
        if (userSelect===computerRandomSelect) {
            result='Ничья';
        } else if (
            (userSelect==="камень" && computerRandomSelect==="ножницы") ||
            (userSelect==="ножницы" && computerRandomSelect==="бумага") ||
            (userSelect==="бумага" && computerRandomSelect==="камень")
            ) { result='Победа!!!';
        } else {
            result='Поражение.';
        }

    alert(`Твой выбор: ${userSelect}\nВыбор компьютера: ${computerRandomSelect}\n${result}`);
    }    
}
