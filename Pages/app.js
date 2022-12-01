/* 

music player might be in site, might not

function playaudio() {
    var audio = document.getElementById("audio");
    audio.play();
}
*/

function master() {
  changeimage();
  changeskill();
  changetitle();
  changetext();
}

function changeskill() {
  var skill = document.getElementById("welearnskill");
  if (skill.src.match("/Assets_Skills/FIGMA.svg")) {
    skill.src = "/Assets_Skills/PS.svg";
  } else {
    skill.src = "/Assets_Skills/FIGMA.svg";
  }
}

function changeimage() {
  var image = document.getElementById("welearn");
  if (image.src.match("/Assets/weLearn.jpeg")) {
    image.src = "/Assets/PS-Midterm.png";
  } else {
    image.src = "/Assets/weLearn.jpeg";
  }
}

function changetitle() {
  var title = document.getElementById("welearntitle");
  if (title.textContent.match("weLearn")) {
    title.textContent = "PS5 Game Cover";
  } else {
    title.textContent = "weLearn";
  }
}

function changetext() {
  var text = document.getElementById("welearntext");
  if (
    text.textContent.match(
      "A UX Figma design project, weLearn is a mobile studying app created by myself & Carter V."
    )
  ) {
    text.textContent =
      "A mockup Playstation 5 video game cover of a basketball game.";
  } else {
    text.textContent =
      "A UX Figma design project, weLearn is a mobile studying app created by myself & Carter V.";
  }
}
