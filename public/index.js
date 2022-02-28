'use strict'

const inItself = document.querySelectorAll(".m-input");
const inIcon = document.querySelectorAll(".m-focus");
const inFontIcon = document.querySelectorAll('.icon');

for(let i = 0; i < inItself.length; i++) {
   inItself[i].addEventListener('focus', () => {
    inIcon[i].classList.add('has-foc');
    inFontIcon[i].classList.add('has-foc');
    inItself[i].classList.add('has-foc');
  });
  inItself[i].addEventListener('blur' , function(){
      if(this.value != "") {
        console.log('working');
      } else {
        inIcon[i].classList.remove('has-foc');
        inFontIcon[i].classList.remove('has-foc');
        inItself[i].classList.remove('has-foc');
      };
  });
};