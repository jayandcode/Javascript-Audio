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
