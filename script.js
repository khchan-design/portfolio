// ||| to X  //

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
    $('.nav-icon-circle').toggleClass('open');
    $('.nav-circle-container a').toggleClass('open');
	});
});


// let clipVideo = document.querySelector(".sticker")
// clipVideo.addEventListener("mouseover", function (e) {
//    clipVideo.play();
// })
// clipVideo.addEventListener("mouseout", function (e) {
//    clipVideo.pause();
// })




// Carousel //

$(document).ready(function(){
$('.items').slick({
  infinite: true,
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 3
});
          });
