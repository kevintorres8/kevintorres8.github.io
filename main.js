const hamburger = document.querySelector('.navbar_hamburger')
const closeicon = document.querySelector('.navbar_close')
const nav = document.querySelector('.navbar')
const navitem = document.querySelectorAll('.navbar_item a')

hamburger.addEventListener('click', openNav);
closeicon.addEventListener('click', closeNav);

navitem.forEach(i => i.addEventListener('click', closeNav))
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function openNav (){
    nav.classList.add('open-nav')
}
function closeNav (){
    nav.classList.remove('open-nav')
}


//enviar email
const contactForm = document.getElementById('contact_form')
const contactName = document.getElementById('contact_name')
const contactEmail = document.getElementById('contact_email')
const contactMessage = document.getElementById('contact_message')

function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm('')
    
}

//contactForm.addEventListener('submit', sendEmail)