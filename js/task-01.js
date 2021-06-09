
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStart = document.querySelector ('[data-action="start"]');
const buttonStop = document.querySelector ('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;


buttonStart.addEventListener("click", () => {
  buttonStart.setAttribute('disabled', true);
  
    timerId = setInterval(() => {
      console.log(`счетчик интервала`);

        const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      //const randomIntegerFromInterval = Math.floor(Math.random() * colors.length);
      
      const selectedcolor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      
      body.style.backgroundColor = selectedcolor;
    }, 1000);
  });

buttonStop.addEventListener ('click', StopChangeBodyColor);

function StopChangeBodyColor (evt) {
  clearTimeout(timerId);
  buttonStart.removeAttribute('disabled');
 };



