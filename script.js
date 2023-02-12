/********************************************************


 ローディング画面表示
 header_txt,scroll_down表示・表示が終わるまでheader画面固定


*********************************************************/

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


/********************************************************


 header テキスト順々に出力


************************************?*******************/

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




/********************************************************


 　scroll_animation


*********************************************************/

const scroll_animations = document.querySelectorAll(".scroll_animation");
const service_height = document.querySelector(".service_lists");
const service_title = document.querySelector(".title.scroll_animation.service_t");
const service_lists = document.querySelectorAll(".service_list.scroll_animation");
const cotact_title = document.querySelector(".title.scroll_animation.contact_t");


document.addEventListener("scroll", () => {
  scroll_animations.forEach(scroll_animation => {
    const getElementDistance = scroll_animation.getBoundingClientRect().top + scroll_animation.clientHeight * 0.6;
    // スクロールしたら表示する
    if(window.innerHeight > getElementDistance) {
      scroll_animation.classList.add("show")
    } 
    //　contact_section表示したらservice_section postision変更
    if(cotact_title.classList.contains("show")) {
      service_height.style.height = "1600px";
      service_title.style.position = "static";
      service_lists.forEach(service_list => {
        service_list.classList.add("card");
      }); //forEach service
    }; //if
  }); // forEach scroll
}); // scroll




/********************************************************


 menubar　下：非表示　上：表示


************************************?*******************/

let beforeScrollValue = 0;

const header_nemu = document.querySelector('.main_top').classList;
window.addEventListener('scroll',() => {
  if(window.scrollY > beforeScrollValue){
    // 下にスクロールした場合の処理
    header_nemu.add('inActive');
  }else{
    // 上にスクロールした場合の処理
    header_nemu.remove('inActive');
    if(service_title.classList.contains("show")) {
      service_height.style.height = "1600px";
      service_title.style.position = "static";
      service_lists.forEach(service_list => {
      service_list.classList.add("card");
      }); //forEach service
    }
  }
  beforeScrollValue = window.scrollY;
});


/********************************************************


 cursor pointer


************************************?*******************/

//準備
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('hov_');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('hov_');      
    });
};
