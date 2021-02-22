// window.onscroll = () => {
//     const nav = document.querySelector('');
//     if(this.scrollY <= 50) nav.className = ''; else nav.className = 'fixed-top light';
//   };

  if ($(window).width() > 767) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#ftco-navbar').addClass("fixed-top light");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#ftco-navbar').removeClass("fixed-top light");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } // end if