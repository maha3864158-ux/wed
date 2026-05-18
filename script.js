const text = "Software Engineer | Frontend Developer | AI Enthusiast";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type,50);
  }
}
type();

/* SCROLL */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

/* SKILLS */
const fills = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll",()=>{
  fills.forEach(fill=>{
    if(fill.getBoundingClientRect().top < window.innerHeight - 50){
      fill.style.width = fill.dataset.width;
    }
  });
});

/* TOP BUTTON */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = ()=>{
  window.scrollTo({top:0,behavior:"smooth"});
};

/* CURSOR */
const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});