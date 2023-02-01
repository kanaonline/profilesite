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

// const header_open = document.querySelector(".header_open");
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

 スクロールで表示

****************************************/
// const main_circle3 = document.querySelector(".main_circle3");

// document.addEventListener("scroll", () => {
//   const getElementDistance =main_circle3.getBoundingClientRect().top;
//   if(window.innerHeight > getElementDistance) {
//     main_circle3.classList.add("show");
//   }
// });

// 自動でスクロール
// document.querySelector("#bottompage").addEventListener("click", () => {
//   window.scrollTo(0, document.body.scrollHeight);
//  })