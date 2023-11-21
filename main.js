/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50?  header.classList.add('shadow-header')
    :header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateId - #form - publicKey
    emailjs.sendForm('service_e4id1c2','template_2xosk1f','#contact-form','ovuZPJnrkNamvBsXU')
    .then(()=>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully'
        //remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        //clear Input Field
        contactForm.reset();
    }, () =>{
        contactMessage.textContent = 'Message not sent (service error)'
    })
}
contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/