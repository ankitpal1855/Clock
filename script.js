setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  htime = htime < 10 ? "0" + htime : htime; // Add leading zero if the hour is a single digit
  mtime = mtime < 10 ? "0" + mtime : mtime; // Add leading zero if the minute is a single digit
  stime = stime < 10 ? "0" + stime : stime; // Add leading zero if the second is a single digit

  hrotation = 30*htime + mtime/2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

  total.innerHTML = `${htime}:${mtime}:${stime}`;
}, 1000);