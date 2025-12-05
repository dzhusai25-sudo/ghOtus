//Сверстать страницу и подключить к ней файл со скриптом. На странице должны быть три текстовых параграфа, поле ввода и кнопка. 
// Напишите скрипт, который будет выполнять следующие условия:

const input = document.querySelector('[type="text"]');
const button = document.querySelector('.button');
const paragraphs = document.querySelector('.paragraphs');

//1.Кнопка скрыта, если в поле ввода нет значения.

function changeButtonVisibility() {
    button.hidden = !input.value.length;
}
input.addEventListener('input', changeButtonVisibility);

//2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.

function addParagraphs() {
    const newP = document.createElement('p');
    newP.innerText = input.value;
    paragraphs.append(newP)

//3.*Если параграфов становится больше 5, первый из них удаляется.

    if (paragraphs.childElementCount > 5) 
        paragraphs.firstElementChild.remove();

    input.value = '';
    button.hidden = true;
}

button.addEventListener('click', addParagraphs);
