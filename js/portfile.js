let btn = document.querySelector(".la-bars")
let box = document.querySelector(".container .box")
let closein = document.querySelector(".container .la-times-circle")


function openNav() {
    box.style.display = "block" ;
    closein.style.display ="block"
  }
function closeNav() {
    box.style.display = "none" 
    closein.style.display ="none"
  }
// end nav 

// start title 
let mytext = "Hello There !"
i = 0
// console.log(mytext[0])

window.onload =function () {
    let stoping = setInterval(function(){
      document.getElementById("h1").textContent += mytext[i];
        i++;
        if(i > mytext.length -1) {
            clearInterval(stoping)
        }
    }, 150)

  
}
// end title 

// start progress 

let section =document.querySelector(".big-box ")
let spans =document.querySelectorAll(".big-box .progress .progress-bar ")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
    //   console.log("Reached Section Three");
      spans.forEach((el) => {
        el.style.width = el.dataset.width;
      });
    }
  };
  console.log(spans)
// end progress 