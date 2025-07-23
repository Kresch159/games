//Turn the text over Переверни текст
function turnTheTextOver() {
            let userText=prompt("Введите текст");
            const reversed=userText.split('').reverse().join('');
            alert(`Перевернутый текст получился: ${reversed}`);            
}