/***************************************

 header テキストshow

****************************************/
// setTimeout設定
const body = document.querySelector(".body");
const getElementDistance = body.getBoundingClientRect().top;
const header_scroll = document.querySelector(".header_scroll");
let Count = 0;

window.addEventListener('load',function(){
  body.classList.add("inactive");
  if(getElementDistance === 0) {
    Count++;
  }
  if(Count === 1) {
    setTimeout(() => {
    header_scroll.classList.add("show");
    body.classList.remove("inactive");
    }, 9000);
    Count--;
  }
  else {
    header_scroll.classList.add("show");
    body.classList.remove("inactive");
  }
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

