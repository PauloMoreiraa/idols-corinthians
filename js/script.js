//$(function(){
 //   $(".carousel").slick({
   //     slidesToShow: 1,
     //   Infinite: true,
       // slidesToScroll: 1,
        //centerMode: true,
        
    //});
//})

//inicializa o AOS
AOS.init();

//Rellax carousel da home

var rellax =  new Rellax('.titulo-sliders',{
  speed: 3
});

var rellax =  new Rellax('.btn-vermais',{
  speed: -1
});

//Rellax história do corinthians



//Rellax paulistão


//Slider esudos

$('.escudos').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: false,
  prevArrow: false
});

//colapse
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})