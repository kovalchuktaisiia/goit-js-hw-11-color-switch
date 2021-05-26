// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const buttonStart = document.querySelector ('[data-action="start"]');
const buttonStop = document.querySelector ('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;


buttonStart.addEventListener("click", () => {
    timerId = setInterval(() => {
      console.log(`I love async JS!`);

      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      
      const selectedcolor = colors[randomIntegerFromInterval];
      
      body.style.backgroundColor = selectedcolor;
    }, 1000);
  });

buttonStop.addEventListener ('click', StopChangeBodyColor);

function StopChangeBodyColor (evt) {
  clearTimeout(timerId)
 };



