/***************************************

 header テキストshow

****************************************/
// setTimeout設定
const body = document.querySelector(".body");
const header_scroll = document.querySelector(".header_scroll");
window.addEventListener('load',function(){
  body.classList.add("inactive");
  setTimeout(function() {
    body.classList.remove("inactive");
    header_scroll.classList.add("show");
  },9000);
});

const header_txt = document.querySelector(".header_txt h1");

texts = header_txt.textContent;
let textsArray = [];

header_txt.textContent = "";

texts.split("");
let count = 0;

texts.split("").forEach(text => {
  if(text === " "){
    textsArray.push(" ");
  }else{
    textsArray.push('<span><span style="animation-delay:'+ ((count * 0.3))  + 's;">' + text + '</span></span>');
    count ++;
  };
});

newText = textsArray.join('');
header_txt.innerHTML = newText;


/***************************************

 スクロールでtopまで表示

****************************************/
// const main = document.getElementById("main");
// let offsetTop = window.pageYOffset + main.getBoundingClientRect().top

// window.addEventListener("scroll", () => {
//   window.scrollTo({
//     top: offsetTop,
//     behavior: 'smooth'
//   });
// });
