setInterval(() => {
  //Getting Time in Hours, Minutes, and Seconds//
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  //    Adding a Zero to make Two digits Time    //
  htime = htime < 10 ? "0" + htime : htime;
  mtime = mtime < 10 ? "0" + mtime : mtime;
  stime = stime < 10 ? "0" + stime : stime;
  
  // Making 12 hour Format//
  htime = (htime > 10 && htime <= 12) ? htime : (htime > 12) ? htime - 12 :(htime == 0) ? "12" : htime;
  
  
// Defining Rotation of Clock Hands//
  hrotation = 30*htime + mtime/2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

//Rotating Clock Hands//
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

//Digital Clock//
  total.innerHTML = `${htime}:${mtime}:${stime}`;
}, 1000);
