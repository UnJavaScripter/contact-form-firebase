const contactForm = document.getElementById('contact-form');

contactForm.onsubmit = (e) => {
    e.preventDefault();
    demo();
}








/* 
    In action Vandelay's service demo
*/
function demo() {
    const r = document.getElementById('r');
    console.log(r);
    r.classList.add('r-animatable');
    r.classList.add('r-going');

    r.addEventListener('transitionend', (e )=> {
        r.classList.remove('r-animatable');
        r.classList.remove('r-going');
    });
}