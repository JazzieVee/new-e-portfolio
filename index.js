// template_d6w2816
// service_7l4qu8g
// eZC8zTmmUIBup0QHD



// SHAPES

const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)` 
}
}

// TOGGLE

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += "dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}

// SEND EMAILS

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_7l4qu8g',
        'template_d6w2816',
        event.target,
        'eZC8zTmmUIBup0QHD'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible"); 
     alert(
     "The auto-email service is unavailable at the moment. Please email directly: Oatman.Estates.Holdings@gmail.com. Thank You!"
    );
  })
}

// OPEN/CLOSE CONTACT BOX

let isModalOpen = false;
function toggleModal() {
 if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
 }
    isModalOpen = true;
    document.body.classList += " modal--open";
}