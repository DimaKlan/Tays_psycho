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
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать далее";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Свернуть";
      moreText.style.display = "inline";
    }
  };


function readMore2() {
  let dots2 = document.getElementById("dots2")
  let moreText2 = document.getElementById("more2");
  let btnText2 = document.getElementById("myBtn2")

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Читать далее";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Свернуть";
    moreText2.style.display = "inline";
  }
};



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
