const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');

iconMenu.addEventListener("click", function(e){
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});


/********************************ANIMATION******************************/

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
  window.addEventListener('scroll' , animOnScroll)
  
  function animOnScroll(params){
    for(let index=0; index<animItems.length; index++){
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;

      if(animItemHight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffSet-animItemPoint) && pageYOffset < (animItemOffSet + animItemHight)){
        animItem.classList.add('_view');
      }  else {
        if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('_view');
        }
      }
  }

  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
  setTimeout(() => {
    animOnScroll();
  }, 300);

}

/*********************popup***************************/

const popLockBody = document.querySelectorAll('.pop-lock-body');
const popupArea = document.querySelector('.popup__area');
const popupClose = document.querySelector('.popup__close');

for(item of popLockBody){
  item.addEventListener("click",function(e){
    document.body.classList.add('_lock');
  });
}

popupArea.addEventListener("click",function(e){
	document.body.classList.remove('_lock');
});

popupClose.addEventListener("click",function(e){
	document.body.classList.remove('_lock');
});



/*********************** FORM VALID******************/

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let check = document.querySelector('.js-check');
let checkLabel = document.querySelector('.label__check');



form.onsubmit = function(){
  emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input){
    if(input.value !== ''){
      input.classList.add('_valid');
      input.classList.remove('_not-valid');
    } else{
      input.classList.remove('_valid');
      input.classList.add('_not-valid');
    }

  })


  if ((emptyInputs.length !== 0)||(!check.checked)) {
    console.log('inputs not filled');
    return false;
  }else{
    document.body.classList.remove('_lock');
  }

}


