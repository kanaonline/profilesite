/***************************************

 ローディング画面表示
 header_txt,scroll_down表示・表示が終わるまでheader画面固定

****************************************/
const loadingID = document.getElementById("js_loading");
const body = document.querySelector(".body");
const header_scroll = document.querySelector(".header_scroll");


function loadedPage() {
  loadingID.classList.add("loaded");
}

if (!sessionStorage.getItem('visited')) {
  sessionStorage.setItem('visited', 'first');
  window.addEventListener('load', function () {
    body.classList.add("inactive");
    setTimeout(loadedPage, 3000);
    setTimeout(() => {
      header_scroll.classList.add("show");
      body.classList.remove("inactive");
      }, 13000);
  });
  setTimeout(loadedPage, 3000);
}else {
  loadedPage();
  header_scroll.classList.add("show");
  body.classList.remove("inactive");
}


/***************************************

 header テキスト順々に出力

****************************************/

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

setTimeout(() => {
  newText = textsArray.join('');
header_txt.innerHTML = newText;
  }, 4000);