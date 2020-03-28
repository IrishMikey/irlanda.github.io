/* LepButton Animation
//Get the button:
const buttonToTop = document.getElementById("BtnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
*/
// Para subir al principio de la pagina
function topFunction() {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

//Código para el menu
const navSlide= () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.nav-bar');
 //Toggle Nav
    
    burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
    });
}
navSlide();
