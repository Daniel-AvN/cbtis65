/*  Alumno: Leonardo Daniel Aviña Neri 5PRAM */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

/* 
var horarioText="Lunes a Viernes - 9am a 6pm";
var telefonoText="+52 462 624 1442";
var correoText="quejasysugerencias@cbtis65.edu.mx";
var piePaginaText="CBTis 65";
var linkSeaAcademic ="https://seaacademic.net:446/cbtis065";
var anioCorriente ="2023";
var semestreCorriente ="ENE - AGO";
var linkFacebook ="https://facebook.com/CBTis65.Oficial";
var linkInstagram ="https://instagram.com/cbtis65_oficial/";
var linkYoutube ="https://www.youtube.com/@cbtis65oficial/";
var textArea;
var tipo = "sugerencia";

function AbrirSeaAcademic(){
  location.href=linkSeaAcademic;
}
function AbrirFacebook(){
  location.href=linkFacebook;
}
function AbrirInstagram(){
  location.href=linkInstagram;
}
function AbrirYoutube(){
      location.href=linkYoutube;
}
function AbrirBuzon(){
      location.href="/sitioWeb/buzon";
} */

const seleccionarRadio=(id)=> {
  const radio = document.getElementById(id);
  radio.checked = true;
}