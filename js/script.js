// scroll animation
AOS.init();



// banner slider
$(".banner-slider").slick({
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        }
      ]
})


// product part slider
$(".products").slick({
  slidesToShow:3,
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
})


// testimonial slider
$(".testi-slider").slick({
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      }
    }
  ]
})


// back to top
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


// contact form start

function sendmail(){
    
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var message = $('#Message').val();

  // var body = $('#body').val();

  var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message;
  //console.log(name, email, message);

  Email.send({
    Host : "smtp.gmail.com",
    Username : "apdc.businessbd@gmail.com",
    Password : "apdc2022",
    To: 'sales@apdc.com.bd',
    From: "apdc.businessbd@gmail.com",
    Subject: "New message on contact from "+name,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
      alert('Your mail has been send. Thank you for connecting.');
      }
      else{
        console.error (message);
        alert('There is error at sending message. ')
        
      }

    }
  );



}
// contact form end