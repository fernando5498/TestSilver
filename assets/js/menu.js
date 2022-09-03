let headerTop = document.getElementById('header')

function menuDown() {
    if (window.scrollY >= 100) {
        headerTop.classList.add('active')
    } else {
        headerTop.classList.remove('active')
    }
}
menuDown()

window.addEventListener('scroll', menuDown)

/* -------------------- SCROLL SMOOTG ------------------- */

let sections = document.querySelectorAll('section')
let linkNav = document.querySelectorAll('.nav-r__link>a');

linkNav.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(section => {
            if (section.id == button.dataset.link) {
                position = section.offsetTop
                window.scroll({
                    top: position - 120,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        })
    });
});


/* --------------------- MENU MOVILE -------------------- */

let menuBurger = document.getElementById('menu-burger')
let nav = document.getElementById('nav-r')
let closeNav = document.getElementById('close-menu')



menuBurger.addEventListener('click', () => {
    nav.classList.toggle('active')
})

document.querySelector('main').addEventListener('click', () => {
    nav.classList.remove('active')
})

linkNav.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})




closeNav.addEventListener('click', () => {
    nav.classList.remove('active')
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        568: {
            items: 2,

        },
        768: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

let btnOffert = document.querySelectorAll('.btn-offert')
let btnTeam = document.querySelectorAll('.btn-team')

btnOffert.forEach(btn => {
    btn.addEventListener('click', () => {
        let img = btn.parentNode.children[0].firstChild.src
        console.log(img);
        document.querySelector('.modal-content-r').classList.add('active')
        document.querySelector('.modal-img').src = img
    })
})

btnTeam.forEach(btn => {
    btn.addEventListener('click', () => {
        let img = btn.parentNode.children[0].children[0].src
        console.log(img);
        document.querySelector('.modal-content-r').classList.add('active')
        document.querySelector('.modal-img').src = img
    })
})


function closeModal() {
    document.querySelector('.modal-content-r').classList.remove('active')
}