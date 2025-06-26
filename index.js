// template_d6w2816
// service_7l4qu8g
// eZC8zTmmUIBup0QHD

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendform(
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