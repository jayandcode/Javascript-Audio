const password = "1234";
let input = "";

const buttons = document.querySelectorAll("button");
const login = document.querySelector(".login");
buttons.forEach(function(btn){
  btn.addEventListener("click", function(){
    let btnVal = this.value;
    for(let i = 0; i < password.length; i++){
      if(btnVal === password[i]){
         input += btnVal;
         if(input === password){
           login.style.transform = "translateX(100%)";
		 // play song on load
		 playSong();
         }
      }
    }
  });
});

// display songs
const audioContent = document.querySelector(".audio-content");
let current = 0;
let song = new Audio();

audioInit(songs);

function audioInit(array) {
	let currentValue = array[current];
	audioContent.innerHTML = `
 <div class="audio-img">
   <img src="${currentValue.cover}" alt="" class="responsive-img">
 </div>
 <div class="title">
 <h4>${currentValue.title}</h4>
 <span>${currentValue.artist}</span>
</div>`

}
// play song on load
function playSong(){
  song.setAttribute("src", songs[current].audioFile);
  song.play();
}
// check whether the song is already playing
const playBtn = document.querySelector(".play").addEventListener("click",function(){
  const btnImg = this.querySelector("img");
   if(song.paused){
      song.play();
      btnImg.setAttribute("src", "pause.png");
   }
   else {
     song.pause();
       btnImg.setAttribute("src", "play.png");
   }
});

song.addEventListener("timeupdate", function(){
  let dot = document.querySelector(".dot");
  let position = song.currentTime / song.duration;

  dot.style.width = position * 100 + "%";
});

const nextBtn = document.querySelector(".next").addEventListener("click",function(){
  if(current === songs.length -1){
    current = -1;
    current ++;
  }
  else {
    current ++;
  }
  audioInit(songs);
});
const prevBtn = document.querySelector(".previous").addEventListener("click",function(){
  if(current === 0){
    current = songs.length;
    current --;
  }
  else {
    current --;
  }
  audioInit(songs);
});
