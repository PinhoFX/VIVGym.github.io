// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


const nav = document.getElementById('teste');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        nav.classList.add("bg-white");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white");
    }
};


// Make navbar transparent when it is on the top
const navbar = document.getElementById('teste');
const txt = document.getElementById('t1')
const navbarHeight = navbar.getBoundingClientRect().height;
var image = document.getElementById("image");
window.addEventListener('scroll', function() {
       // add padding top to show content behind navbar
      if (window.scrollY > navbarHeight) {
        
        navbar.classList.add('defaultbg');     
        // image.src = "img/logo.png";
        navbar.classList.remove('bg-transparent');  // removing CSS effect

       // remove padding top from body        
      } else {
        // image.src = "img/logo-w.png"
        navbar.classList.add('bg-transparent');  // removing CSS effect
        navbar.classList.remove('defaultbg');  // removing CSS effect
      } 
  });


const time = () => {
    

    const activerow = document.querySelector('#activerow');

    const monday = document.querySelector('.monday');
    const tuesday = document.querySelector('.tuesday');
    const wednesday = document.querySelector('.wednesday');
    const thursday = document.querySelector('.thursday');
    const friday = document.querySelector('.friday');
    const saturday = document.querySelector('.saturday');
    const sunday = document.querySelector('.sunday');

    const monday2 = document.querySelector('.monday-2');
    const tuesday2 = document.querySelector('.tuesday-2');
    const wednesday2 = document.querySelector('.wednesday-2');
    const thursday2 = document.querySelector('.thursday-2');
    const friday2 = document.querySelector('.friday-2');
    const saturday2 = document.querySelector('.saturday-2');
    const sunday2 = document.querySelector('.sunday-2');
    now = new Date;
    now.toLocaleTimeString('pt-BR');

    // vERIFICAÇÃO
    if (now.getHours() <=9){
        hs = "0" + now.getHours();
    }
    else{
        hs = now.getHours();

    }
    if (now.getMinutes() <=9){
        minutos = "0" + now.getMinutes();
    }
    else{
        minutos = now.getMinutes();
    }
    // vERIFICAÇÃO


    const hora = [hs, minutos].join(':');
    const isInRange = (start, end, time) => {
        if(time < '00:00' || time > '23:59' || time.substring(3) > '59') {
          console.log('Hora no válida');
          console.log(time);
          return;
          // o throw new Error('Hora no válida');
        }

          console.log(time);
        return time >= start && time <= end;
      }
      
    switch (new Date().getDay()) {
        case 1:
            monday.setAttribute("id", "activerow");
            monday2.setAttribute("id","activeday");
            if(isInRange("07:00", "21:29",hora) == true ){
                monday2.textContent ="Aberto";
            }
            else{
                monday2.textContent ="Fechado";

            }

            break;
        case 2:
            tuesday.setAttribute("id", "activerow");
            tuesday2.setAttribute("id","activeday");

            if(isInRange("07:00", "21:29",hora) == true){
                tuesday2.textContent ="Aberto";
            }
            else{
                tuesday2.textContent ="Fechado";

            }
            break;
        case 3:
            wednesday.setAttribute("id", "activerow");
            wednesday2.setAttribute("id","activeday");
            if(isInRange("07:00", "21:29",hora) == true){
                wednesday2.textContent ="Aberto";
            }
            else{
                wednesday2.textContent ="Fechado";

            }
            break;
        case 4:
            thursday.setAttribute("id", "activerow");
            thursday2.setAttribute("id","activeday");

            if(isInRange("07:00", "21:29",hora) == true){
                thursday2.textContent ="Aberto";
            }
            else{
                thursday2.textContent ="Fechado";

            }
            break;
        case 5:
            friday.setAttribute("id", "activerow");
            friday2.setAttribute("id","activeday");
            if(isInRange("07:00", "21:29",hora) == true){
                friday2.textContent ="Aberto";
            }
            else{
                friday2.textContent ="Fechado";

            }
            break;
        case 6:
            saturday.setAttribute("id", "activerow");
            saturday2.setAttribute("id","activeday");

            if(isInRange("09:00","13:00",hora) == false && isInRange("15:00","20:29",hora) == false  ){
                saturday2.textContent ="Fechado";
            }
            else{
                saturday2.textContent ="Aberto";
            }
            break;
        case 0:
            sunday.setAttribute("id", "activerow");
            sunday2.setAttribute("id","activeday");
            sunday2.textContent ="Fechado";
            break;
    }

}




let imgs = [
//Receção
{
    id: "1", 
    Img: "img/Fotos/Receção1.jpg", 
},
{
    id: "1", 
    Img: "img/Fotos/Receção2.jpg", 
},


// Cardio musculação
{
    id: "2", 
    Img: "img/Fotos/CarMusc1.jpg", 
},
{
    id: "2", 
    Img: "img/Fotos/CarMusc2.jpg", 
},
{
    id: "2", 
    Img: "img/Fotos/CarMusc3.jpg", 
},
{
    id: "2", 
    Img: "img/Fotos/CarMusc4.jpg", 
},
{
    id: "2", 
    Img: "img/Fotos/CarMusc5.jpg", 
},
{
    id: "2", 
    Img: "img/Fotos/CarMusc6.jpg", 
},

// Cycle
{
    id: "3", 
    Img: "img/Fotos/Cycle1.jpg", 
},
{
    id: "3", 
    Img: "img/Fotos/Cycle2.jpg", 
},
{
    id: "3", 
    Img: "img/Fotos/Cycle3.jpg", 
},


// Aulas
{
    id: "4", 
    Img: "img/Fotos/Aulas1.jpg", 
},
{
    id: "4", 
    Img: "img/Fotos/Aulas2.jpg", 
},
{
    id: "4", 
    Img: "img/Fotos/Aulas3.jpg", 
},





];
  // Get the modal by id
  var modal = document.getElementById("modal");
   var bg2 = document.getElementById("Body");


  // Get the modal image tag
  var modalImg = document.getElementById("modal-img");

  // this function is called when a small image is clicked
  async function showModal(src) {
   await imgs.forEach((im) => {
        if(im.id == src){

            var info = "<div class='swiper-slide' style='display: flex; flex-wrap: wrap; align-content: center; justify-content: center; align-items: center;' > "+
            "<img"+
            " class='object-cover w-full' "+
            " src='"+im.Img+"' "+
            " alt='image' "+
            "/>"+
            " </div> ";
        
            $('#loadimg').append(info);
        }
     })

       bg2.classList.add("sem-scroll");
      modal.classList.remove('hidden');
    //   modalImg.src = src;
  }




  var swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // this function is called when the close button is clicked
  function closeModal() {
        swiper.slideTo(1, 1, false)
        swiper.slidePrev(1, false)
        $('#loadimg').html("");
        bg2.classList.remove("sem-scroll");
        modal.classList.add('hidden');
        }
