const navSlide = ()=> {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    mobile.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .75}s`
        }
    });

    mobile.classList.toggle('toggle');
    });

    
}

const app =() =>{
    navSlide();
}

app();

