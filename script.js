/***************************************

 header テキストshow

****************************************/
// setTimeout設定
const body = document.querySelector(".body");
window.addEventListener('load',function(){
  body.classList.add("inactive");
  setTimeout(function() {
    body.classList.remove("inactive");
  },9000);
});

const header_open = document.querySelector(".header_open");
const header_txt = document.querySelector(".header_txt");

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

 header circle show

****************************************/
let header_circle = document.querySelector(".header_circle");
let scale_count = 0;
const main_open = document.querySelector('.main_open');
const main_circle1 = document.querySelector('.main_circle1');
const main_circle2 = document.querySelector('.main_circle2');

window.addEventListener('scroll', () => {
  scale_count ++;
  if(scale_count === 5) {
    header_circle.classList.add('show');
    header_circle.style.transform = "scale(10,10)";
    scale_count ++; 
  }
  if(scale_count === 15){
    window.addEventListener('scroll', () => {
      header_circle.style.transform = "scale(20,20)";
      
    })
  }
  if(scale_count === 25){
    window.addEventListener('scroll', () => {
      header_circle.style.transform = "scale(30,30)";
      main_circle1.classList.add('show');
      main_circle2.classList.add('show');
    })
  }
  if(scale_count === 50){
    window.addEventListener('scroll', () => {
      header_circle.style.transform = "scale(45,45)";
      header_open.classList.add('inactive');
      header_circle.classList.remove('show');
    })
  }
});

/***************************************

 スクロールで表示

****************************************/
const main_lists = document.querySelector(".main_lists");

document.addEventListener("scroll", () => {
  const getElementDistance = main_lists.getBoundingClientRect().top;
  if(window.innerHeight > getElementDistance) {
    main_lists.classList.add("show");
  }
});

// 自動でスクロール
// document.querySelector("#bottompage").addEventListener("click", () => {
//   window.scrollTo(0, document.body.scrollHeight);
//  })