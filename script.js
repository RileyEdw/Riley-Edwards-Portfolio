let slideIndex = 1;
let time = new Date();
let hour = time.getHours()
let greeting = ""
console.log(hour)
if(5<hour && hour<=11){greeting="Good Morning!"}
else if(12<hour && hour<=16){greeting="Good Afternoon!"}
else if(17<hour || hour<=4){greeting="Good Evening!"}
else{greeting="Hello!"}
if(true){document.querySelector(".slidedesc").innerHTML=greeting+ " I'm Riley Edwards.<br>I'm a young man from Evansville, with a passion for computer science and a love for cats.  I like to help people whenever I can."}
// Next/previous controls 17 is evening start 16 is afternoon end 12 is afternoon begin 5 is morning begin, 11 is morning end
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  if(slideIndex===1){
    document.querySelector(".slidetitle").innerHTML="Me";
    document.querySelector(".slidedesc").innerHTML=greeting+ " I'm Riley Edwards.<br>I'm a young man from Evansville, with a passion for computer science and a love for cats.  I like to help people whenever I can."
  };
  if(slideIndex===2){
    document.querySelector(".slidetitle").innerHTML="Code";
    document.querySelector(".slidedesc").innerHTML="I've been coding since I was a kid, although it was simple block code. I found a love for it back then. Since, I've been growing my knowledge and skill through practice and projects."
  };
  if(slideIndex===3){
    document.querySelector(".slidetitle").innerHTML="My Dream";
    document.querySelector(".slidedesc").innerHTML="My main dream is to eventually make a video game of my own. I would love to make a game that many people enjoy, but I still am studying different parts of computer science to be flexible."
  };
}