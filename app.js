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
         }
      }
    }
  });
});

// display songs
const audioContent = document.querySelector(".audio-content");
let current = 0;

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

const playBtn = document.querySelector(".play").addEventListener("click",function(){
   let newAudio = document.createElement("audio");
   newAudio.setAttribute("src", songs[current].audioFile);
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
