import Timer from 'timrjs';
const timer = Timer('2019-09-28T20:00', {
  formatOutput: 'dd Tage hh Stunden mm Minuten ss Sekunden',
});

timer.start();

const element = document.getElementById('countdown');
timer.ticker(({ formattedTime }) => {
  element.innerText = formattedTime;
});

timer.finish((e) => {
  element.innerText = 'boom';
});
