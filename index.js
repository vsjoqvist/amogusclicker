var text = document.querySelector("p");
var amogus = document.querySelector("img");
var dripness = 0;
var hasImpSprite = false;
SetUp();

function getCookie(name) {
  // Add the = sign
  name = name + "=";

  // Get the decoded cookie
  const decodedCookie = decodeURIComponent(document.cookie);

  // Get all cookies, split on ; sign
  const cookies = decodedCookie.split(";");

  // Loop over the cookies
  for (let i = 0; i < cookies.length; i++) {
    // Define the single cookie, and remove whitespace
    const cookie = cookies[i].trim();

    // If this cookie has the name of what we are searching
    if (cookie.indexOf(name) == 0) {
      // Return everything after the cookies name
      return cookie.substring(name.length, cookie.length);
    }
  }
}

function SetUp() {
  dripness = parseInt(getCookie("dripness"));
  if (!dripness) {
    dripness = 0;
  }
  text.innerHTML = getScore();
}

function getScore() {
  console.log();
  if (dripness >= 69909 && !hasImpSprite) {
    amogus.src = "sus.png";
  }
  return dripness <= 0
    ? "YoU hAVe 0 DrIPneSs PeAsent"
    : dripness <= 69
    ? `YoU hAVe ${dripness} <br> SUS`
    : dripness <= 489
    ? `you have 69 + ${dripness - 69} dripness <br> sus king`
    : dripness < 1000
    ? `you have 69 + 420 + ${dripness - 489} drippy stuff<br> sus master`
    : dripness <= 69909
    ? `you have 69 + 420 + ${
        dripness - 489
      } <br> amogus sussy drip <br>Sussy baka`
    : `YOUR DRIP IS GODLY, 69420 + ${
        dripness - 69420
      } DRIPPINESS <br> Sussy impostor`;
}

amogus.onclick = function () {
  dripness++;
  text.innerHTML = getScore();
};

setInterval(() => {
  document.cookie = `dripness=${dripness}; expires=Sun, 01 Jan 2100 12:00:00 UTC;`;
}, 60 * 1000);
