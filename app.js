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
