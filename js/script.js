$(function(){

  keyword =gsap.fromTo(".side_menu .keyword ul li", 
  { 
    opacity:0,
  },
  {
    duration: 1,
    opacity: 1, 
    delay: 0, 
    stagger: 0.05,
    paused: true
  });

  artist = gsap.fromTo(".side_menu .artist ul li", 
  { 
    opacity:0,
  },
  {
    duration: 1,
    opacity: 1, 
    delay:1, 
    stagger: 0.05,
    paused: true
  });


  $('.icon .setting').click(function(e){
    e.preventDefault();
    $('body').addClass('scroll_hidden')
    $('.side_menu').addClass('on')
    keyword.restart();
    artist.restart();
  })

  $('.close_search').click(function(e){
    e.preventDefault();
    $('body').removeClass('scroll_hidden')
    $('.side_menu').removeClass('on')
  })

  $('.icon .alert').click(function(e){
    e.preventDefault();
    $('body').addClass('scroll_hidden')
    $('.settings').addClass('on')
    keyword.restart();
    artist.restart();
  })

  $('.settings .btn').click(function(){
    $(this).toggleClass('on')
  })

   var swiper = new Swiper(".visual_slide", {
    slidesPerView:1.2,
    centeredSlides: true,
    spaceBetween:15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".recent_slide", {
    slidesPerView: 2.3,
    spaceBetween: 15,
  });

  var swiper = new Swiper(".best_slide", {
    slidesPerView: 2.3,
    spaceBetween: 15,
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".info .contents img",
  {
    scrollTrigger: {
      trigger: ".info",
      start: "top 20%",
      scrub: true,
      // markers: true
    },
    duration: 2,
    y:'-20%',
    opacity: 1, 
    delay: 0, 
    // stagger: 0.05,
    // paused: true
  });

  $('.tab_bar .bar_icon .play').click(function(e){
  e.preventDefault();
  $('body').addClass('.scroll_hidden')
  $('.tab_bar').addClass('on')
})


$('footer .tab_bar .bar_icon .play').click(function(){
  $(this).toggleClass('on')
})

$('.close').click(function(e){
  e.preventDefault();
  $('body').removeClass('scroll_hidden')
  $('.tab_bar').removeClass('on')
})


function list(cate,listEl){
  $.getJSON('js/music.json', null, function(data, status){
     if (status == "success"){
      var result = data.filter(function (parm) {return parm.category == cate });
      var html = '';
       $.each(result, function(index, music){
        //alert(entry['name'])

      if(cate == 'new' || cate == 'recent' || cate == 'best'){
        html += '<li class="swiper-slide">'
        html += '<a href="">'
        html += '<img src="'+music.imgSrc+'" alt="">'
        html += '<div class="name">'
        html += '<em>'+music.title+'</em>'
        html += '<h3>'+music.artist+'</h3>'
        html += '</div>'
        html += '</a>'
        html += '</li>'
      }
      
//       else if(cate == 'recent'){
// <li class="swiper-slide">
// <a href="">
//   <img src="https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5f/66/dd5f6633-aaca-c0ee-73a7-c75708e58fa4/source/600x600bb.jpg" alt="">
//   <div class="name">
//     <em>NEXT EPISODE</em>
//     <h3>AKMU</h3>
//   </div>
// </a>
// </li>
//       }
      });
       $(listEl).find('.swiper-wrapper').append(html)
       

      }else if (status == "error" || status == "parsererror" ){
        alert("An error occured");
      }

      var swiper = new Swiper(".new_slide", {
        slidesPerView:"2.3",
        spaceBetween:15,
        grid: {
          rows: 2,
        },
        // loop:true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });

  });




}
list('new','.new_slide')
list('recent','.recent_slide')
list('best','.best_slide')
// list('comedy','.slide01')
// list('ani','.slide02')

});

