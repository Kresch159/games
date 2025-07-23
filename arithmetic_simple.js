function arithmeticSimple() {
    alert('Добро пожаловать в игру Простая арифметика');
    alert('Будут предложены случайные задачи на сложение, вычитание, умножение и деление. Попробуй решить их все');

    function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    let a=getRandomInt(1, 20);
    let b=getRandomInt(1, 20);
    let c=getRandomInt(1, 20);
    let d=getRandomInt(1, 20);
    let e=getRandomInt(1, 10);
    let f=getRandomInt(1, 10);
    let g=getRandomInt(1, 10);
    let div=getRandomInt(1, 10);
    let summ=a+b;
    let diff=c-d;
    let mult=e*f;
    let h=g*div;
        
    let userSumm = Number(prompt(`${a} + ${b} =`));
    if (userSumm===0) return;
    let userDiff = Number(prompt(`${c} - ${d} =`));
    if (userDiff===0) return;
    let userMult = Number(prompt(`${e} * ${f} =`));
    if (userMult===0) return;
    let userDiv = Number(prompt(`${h} / ${g} =`));
    if (userDiv===0) return;

    alert(`${a} + ${b} = ${summ} ваш ответ ${userSumm}
${c} - ${d} = ${diff} ваш ответ ${userDiff}
${e} * ${f} = ${mult} ваш ответ ${userMult}
${h} / ${g} = ${div}  ваш ответ ${userDiv}`);

    if (summ==userSumm && diff==userDiff && mult==userMult && div==userDiv) {
        alert('Все верно!!!')
    } else {
        alert('Есть ошибка')
    }
}