let preLoader = document.getElementById('preloader');

document.body.onload = function () {

  setTimeout(function() {
    if( !preLoader.classList.contains('done') )
    {
      preLoader.classList.add('done')
    }
  }, 3000);

};


const menuIcon = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.header__menu');

if (menuIcon) {
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
};


function readMore() {
    let dots = document.getElementById("dots");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать далее";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Свернуть";
    }
  };



  let myBtn = document.getElementsByClassName("about__text__btn");
  let c;

for (c = 0; c < myBtn.length; c++) {
  myBtn[c].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.previousElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};


function readMore2() {
  let btnText2 = document.getElementById("myBtn2")
  let dots2 = document.getElementById("dots2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Читать далее";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Свернуть";
  }

};

let myBtn2 = document.getElementsByClassName("education__text__btn");
let c2;

for (c2 = 0; c2 < myBtn2.length; c2++) {
  myBtn2[c2].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.previousElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



const menuLinks = document.querySelectorAll('.header__link[data-goto]');
const menuLinks2 = document.querySelectorAll('.footer__link[data-goto]');

if(menuLinks.length > 0 && menuLinks2.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    menuLinks2.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(menuIcon.classList.contains('_active')){
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuHeader.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    };

};



let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
