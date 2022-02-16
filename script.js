const dday = document.querySelector(".clock");
const christmas = new Date("2022-12-25T00:00:00").getTime();
const currentTime = new Date().getTime();

function ddayHandler() {
  const currentTime = new Date().getTime();
  const Time = (christmas - currentTime) / 1000;
  const Day = Math.floor((Time / 3600 / 24) % 365);
  const Hour = Math.floor((Time / 3600) % 24);
  const Minute = Math.floor((Time / 60) % 60);
  const Second = Math.floor(Time % 60);
  dday.innerHTML = `<strong>${Day}d ${Hour}h ${Minute}m ${Second}s</strong>`;
}

ddayHandler();
setInterval(ddayHandler, 1000);
