document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(".navbar-burger"),
    t = document.querySelectorAll(".navbar-menu");
  if (e.length && t.length)
    for (var a = 0; a < e.length; a++)
      e[a].addEventListener("click", function () {
        for (var e = 0; e < t.length; e++) t[e].classList.toggle("hidden");
      });
  let r = document.querySelectorAll(".navbar-close"),
    i = document.querySelectorAll(".navbar-backdrop");
  if (r.length)
    for (var a = 0; a < r.length; a++)
      r[a].addEventListener("click", function () {
        for (var e = 0; e < t.length; e++) t[e].classList.toggle("hidden");
      });
  if (i.length)
    for (var a = 0; a < i.length; a++)
      i[a].addEventListener("click", function () {
        for (var e = 0; e < t.length; e++) t[e].classList.toggle("hidden");
      });
});
const nav = document.getElementById("teste");
window.onscroll = function () {
  document.body.scrollTop >= 200
    ? (nav.classList.add("bg-white"), nav.classList.remove("bg-transparent"))
    : (nav.classList.add("bg-transparent"), nav.classList.remove("bg-white"));
};
const navbar = document.getElementById("teste"),
  txt = document.getElementById("t1"),
  navbarHeight = navbar.getBoundingClientRect().height;
var image = document.getElementById("image");

window.addEventListener("scroll", function () {
  window.scrollY > navbarHeight
    ? (navbar.classList.add("defaultbg"),
      navbar.classList.remove("bg-transparent"))
    : (navbar.classList.add("bg-transparent"),
      navbar.classList.remove("defaultbg"));
});
const time = () => {
  document.querySelector("#activerow");
  let e = document.querySelector(".monday"),
    t = document.querySelector(".tuesday"),
    a = document.querySelector(".wednesday"),
    r = document.querySelector(".thursday"),
    i = document.querySelector(".friday"),
    o = document.querySelector(".saturday"),
    s = document.querySelector(".sunday"),
    n = document.querySelector(".monday-2"),
    l = document.querySelector(".tuesday-2"),
    d = document.querySelector(".wednesday-2"),
    c = document.querySelector(".thursday-2"),
    g = document.querySelector(".friday-2"),
    u = document.querySelector(".saturday-2"),
    m = document.querySelector(".sunday-2");
  (now = new Date()).toLocaleTimeString("pt-BR"),
    (hs = 9 >= now.getHours() ? "0" + now.getHours() : now.getHours()),
    (minutos =
      9 >= now.getMinutes() ? "0" + now.getMinutes() : now.getMinutes());
  let v = [hs, minutos].join(":"),
    y = (e, t, a) => {
      if (a < "00:00" || a > "23:59" || a.substring(3) > "59") {
        // console.log("Hora no v\xe1lida"), console.log(a);
        return;
      }
      return console.log(a), a >= e && a <= t;
    };
  switch (new Date().getDay()) {
    case 1:
      e.setAttribute("id", "activerow"),
        n.setAttribute("id", "activeday"),
        !0 == y("07:00", "21:29", v)
          ? (n.textContent = "Aberto")
          : (n.textContent = "Fechado");
      break;
    case 2:
      t.setAttribute("id", "activerow"),
        l.setAttribute("id", "activeday"),
        !0 == y("07:00", "21:29", v)
          ? (l.textContent = "Aberto")
          : (l.textContent = "Fechado");
      break;
    case 3:
      a.setAttribute("id", "activerow"),
        d.setAttribute("id", "activeday"),
        !0 == y("07:00", "21:29", v)
          ? (d.textContent = "Aberto")
          : (d.textContent = "Fechado");
      break;
    case 4:
      r.setAttribute("id", "activerow"),
        c.setAttribute("id", "activeday"),
        !0 == y("07:00", "21:29", v)
          ? (c.textContent = "Aberto")
          : (c.textContent = "Fechado");
      break;
    case 5:
      i.setAttribute("id", "activerow"),
        g.setAttribute("id", "activeday"),
        !0 == y("07:00", "21:29", v)
          ? (g.textContent = "Aberto")
          : (g.textContent = "Fechado");
      break;
    case 6:
      o.setAttribute("id", "activerow"),
        u.setAttribute("id", "activeday"),
        !1 == y("09:00", "13:00", v) && !1 == y("15:00", "20:29", v)
          ? (u.textContent = "Fechado")
          : (u.textContent = "Aberto");
      break;
    case 0:
      s.setAttribute("id", "activerow"),
        m.setAttribute("id", "activeday"),
        (m.textContent = "Fechado");
  }
};

let imgs = [
  { id: "1", Img: "img/Fotos/Rececao1.jpg" },
  { id: "1", Img: "img/Fotos/Rececao2.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc1.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc2.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc3.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc4.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc5.jpg" },
  { id: "2", Img: "img/Fotos/CarMusc6.jpg" },
  { id: "3", Img: "img/Fotos/Cycle1.jpg" },
  { id: "3", Img: "img/Fotos/Cycle2.jpg" },
  { id: "3", Img: "img/Fotos/Cycle3.jpg" },
  { id: "4", Img: "img/Fotos/Aulas1.jpg" },
  { id: "4", Img: "img/Fotos/Aulas2.jpg" },
  { id: "4", Img: "img/Fotos/Aulas3.jpg" },
];


// Modal

var modal = document.getElementById("modal"),
  bg2 = document.getElementById("Body"),
  modalImg = document.getElementById("modal-img");

async function showModal(e) {
  await imgs.forEach((t) => {
    if (t.id == e) {
      var a =
        "<div class='swiper-slide' style='display: flex; flex-wrap: wrap; align-content: center; justify-content: center; align-items: center;' > <img class='object-cover w-full'  src='" +
        t.Img +
        "'  alt='image' /> </div> ";
      $("#loadimg").append(a);
    }
  }),
    bg2.classList.add("sem-scroll"),
    modal.classList.remove("hidden");
}
var swiper = new Swiper(".mySwiper", {
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

function closeModal() {
  swiper.slideTo(1, 1, !1),
    swiper.slidePrev(1, !1),
    $("#loadimg").html(" "),
    bg2.classList.remove("sem-scroll"),
    modal.classList.add("hidden");
}

// Fim Modal



const myObserver = new IntersectionObserver((entries) =>{
  console.log(entries); 
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('mot');
            entry.target.classList.remove('esc');

        } 
        else{
            entry.target.classList.add('esc');
            entry.target.classList.remove('mot');
        }
    });
});
const elementos = document.querySelectorAll('.esc');
elementos.forEach((element) => myObserver.observe(element));




const myObserver2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('mot2');
            entry.target.classList.remove('esc2');

        } 
        else{
            entry.target.classList.add('esc2');
            entry.target.classList.remove('mot2');
        }
    });
});
const elementos2 = document.querySelectorAll('.esc2');
elementos2.forEach((element) => myObserver2.observe(element));





