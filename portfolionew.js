$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // ================================ scrolling ====================
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  
  
  let numberPercent = document.querySelectorAll('.countbar')
          let getPercent = Array.from(numberPercent)
  
          getPercent.map((items) => {
              let startCount = 0
              let progressBar = () => {
                  startCount++
                  items.innerHTML = `<h3>${startCount}%</h3>`
                  items.style.width = `${startCount}%`
                  if (startCount == items.dataset.percentnumber) {
                      clearInterval(stop)
                  }
              }
              let stop = setInterval(() => {
                  progressBar()
              }, 25)
          })

// ======================== scroll spy navigation ====================

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

