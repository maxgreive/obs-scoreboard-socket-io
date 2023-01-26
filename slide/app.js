const times = [
  {
    home: "Team Home",
    away: "Team Away",
    time: "2023-01-28 9:00"
  }
]

let time = 3600;

function beat() {
  const now = new Date();
  const timeBuffer = new Date(now.getTime() - 5 * 60000);
  const next = times.filter(t => new Date(t.time) > timeBuffer)[0];

  if (next) {
    time = Math.floor((new Date(next.time) - now) / 1000);
    document.querySelector('.team:first-of-type span').textContent = next.home;
    document.querySelector('.team:last-of-type span').textContent = next.away;
  } else {
    time = 3600;
  }
  time -= 1;

  let minutes = Math.floor(Math.abs(time / 60));
  let seconds = Math.floor(Math.abs(time % 60));

  document.querySelector('.minutes').textContent = `0${minutes}`.slice(-2);
  document.querySelector('.seconds').textContent = `0${seconds}`.slice(-2);
}

let interval = setInterval(beat, 1000);