// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//     після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.


const controls = document.querySelector('#controls');
const input = controls.firstElementChild;
console.log(input);

const btnCreate = document.querySelector('[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');
console.log(boxes);


btnCreate.addEventListener('click', onbtnCreate)

function onbtnCreate() {
    boxes.insertAdjacentHTML('beforeend', createBoxes(input.value));
    console.log(boxes);
}


function createBoxes(amount) {
    let box = [];
    let widht = 30;
    let height = 30;
    for (i = 0; i < Number(amount); i += 1) {
        let element = `<div widh = ${widht}px, height = ${height}px, backgroundColor = ${getRandomHexColor()} ></div>`;
        console.log(element);
        widht += 10;
        height += 10;
        box.push(element);
    }
    console.log(boxes);
return box.join('')
}


// function onbtnCreate () {
//     let boxes = [];
//     let widht = 30;
//     let height = 30;
//     for (i = 0; i < Number(input.value); i += 1) {
//         let element = `<div widh = "${widht}px" height = ${height}px backgroundColor = ${getRandomHexColor()} ></div`;
//         console.log(element);
//         widht += 10;
//         height += 10;
//         boxes.push(element);
//     }

// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

