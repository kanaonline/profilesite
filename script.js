const targetElement = document.querySelector(".header_txt");

texts = targetElement.textContent;
let textsArray = [];

targetElement.textContent = "";

texts.split("");
let count = 0;

texts.split("").forEach(text => {
  if(text === " "){
    textsArray.push(" ");
  }else{
    textsArray.push('<span><span style="animation-delay:'+ ((count * 0.2))  + 's;">' + text + '</span></span>');
    count ++;
  };
});

newText = textsArray.join('');
targetElement.innerHTML = newText;

