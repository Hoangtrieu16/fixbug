let pre = document.getElementById("back");
let next = document.getElementById("next");
let play = document.getElementById("play");
let tudong = document.getElementById("autoplay");
let title = document.getElementById("NameSong");
let title1 = document.getElementById("NameSong1");
let casi = document.getElementById("Singerr");
let Images = document.getElementById("rangerImg");
let index = 0;
let playing_song = false;
let colum = document.getElementById("column1");
let track = document.createElement("audio");
track.setAttribute("abc", "controls");
let All_song;

All_song = [
  {
    name: "99999 đóa hoa hồng",
    path: "./sound/1.mp3",
    img: "./sound/1.jpg",
    singer: "Phin",
  },
  {
    name: "Cua",
    path: "./sound/2.mp3",
    img: "./sound/2.jpg",
    singer: "Hieuthuhai",
  },
  {
    name: "Cried",
    path: "./sound/3.mp3",
    img: "./sound/3.jpg",
    singer: "Visual",
  },
  {
    name: "Don't Waste My Time",
    path: "./sound/4.mp3",
    img: "./sound/4.jpg",
    singer: "16 Typh x Lil Wuyn",
  },
  {
    name: "Xích Thêm Chút",
    path: "./sound/5.mp3",
    img: "./sound/5.jpg",
    singer: "Rapital",
  },
  {
    name: "Malibu",
    path: "./sound/6.mp3",
    img: "./sound/6.jpg",
    singer: "$ATIVA x 16 Typh",
  },
];

function loadMusic(index) {
  track.src = All_song[index].path;
  title.innerHTML = All_song[index].name;
  title1.innerHTML = All_song[index].name;
  Images.src = All_song[index].img;
  casi.innerHTML = All_song[index].singer;
  track.load();
}
loadMusic(index);
function checkplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}
function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
}
function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
}
function next_song() {
  if (index < All_song.length - 1) {
    index += 1;
    loadMusic(index);
    playsong();
  } else {
    index = 0;
    loadMusic(index);
    playsong();
  }
}
function pre_song() {
  if (index > 0) {
    index -= 1;
    loadMusic(index);
    playsong();
  } else {
    index = All_song.length;
    loadMusic(index);
    playsong();
  }
}
