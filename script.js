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
    setTimeout(loadedPage, 1000);
    setTimeout(() => {
      header_scroll.classList.add("show");
      body.classList.remove("inactive");
      }, 11000);
  });
  setTimeout(loadedPage, 1000);
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
  }, 2000);




/********************************************************


 　scroll_animation


*********************************************************/

const scroll_animations = document.querySelectorAll(".scroll_animation");


document.addEventListener("scroll", () => {
  scroll_animations.forEach(scroll_animation => {
    const getElementDistance = scroll_animation.getBoundingClientRect().top + scroll_animation.clientHeight * 0.6;
    // スクロールしたら表示する
    if(window.innerHeight > getElementDistance) {
      scroll_animation.classList.add("show")
    } 
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
  }
  beforeScrollValue = window.scrollY;
});



/**************************************************
 * 
 * main三本線メニュー
 * 
***************************************************/

const main_top_menuButton = document.getElementById("main_top_menuButton");
      menuButton_mask = document.getElementById("menuButton_mask");
      humbuger_menu =  document.getElementById("humbuger_menu");
      humbuger_menu_lists = document.querySelectorAll('.humbuger_menu_list > a');

document.addEventListener('DOMContentLoaded',function() {
  main_top_menuButton.addEventListener('click',() => {
    main_top_menuButton.classList.toggle('active');
    menuButton_mask.classList.toggle('active');
    humbuger_menu.classList.toggle('active');
    body.classList.toggle('inactive');
    
    humbuger_menu_lists.forEach(humbuger_menu_list => {
      humbuger_menu_list.addEventListener('click', () => {
        main_top_menuButton.classList.remove('active');
        menuButton_mask.classList.remove('active');
        humbuger_menu.classList.remove('active');
        body.classList.remove('inactive');
      });
    });
  });
});



/********************************************************


 cursor pointer


**********************************************************/

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


/**************************************************
 * 
 * service titleの表示・非表示
 * 
***************************************************/
const service_t = document.getElementById('service_t');
window.addEventListener('scroll', function() {
  const element = document.getElementById('service_list_three');
  const elementPosition = element.getBoundingClientRect();

  if (elementPosition.top <= 0) {
    service_t.style.display = 'none';
  }else {
    service_t.style.display = 'block';
  }
});



/********************************************************


  スマホ・タブレットhover無効


**********************************************************/

if ('ontouchstart' in document.documentElement) {
  for (var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
    var sheet = document.styleSheets[sheetI];
    var cssRules;
    try {
      cssRules = sheet.cssRules;
    } catch (e) {
      continue;
    }
    if (cssRules) {
      for (var ruleI = cssRules.length - 1; ruleI >= 0; ruleI--) {
        var rule = cssRules[ruleI];

        if (rule.selectorText) {
          rule.selectorText = rule.selectorText.replace(':hover', ':active');
        }
      }
    }
  }
}


