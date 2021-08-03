// 
$('.slick-slider').on('init', function(event, slick){

	//Отримуєм заг к-сть слайдів
	var totalSlides = slick.slideCount;
  
  // Оновлюємо HTML у відповідному елементі
  $('#total_slides').html(totalSlides);
});

//Отримуємо індекс поточного слайду
$('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
$('#current_slide').html(currentSlide+1);
});

//Ініціалізація (запуск) слайдера
$(document).ready(function(){

	var slideOptions = {
		arrows: false
	}

$('.slick-slider').slick(slideOptions);
	
});	



$('#slider_next').on('click',function(){
// перехід до наступного слайду
$('.slick-slider').slick('slickNext');	
});

$('#slider_prev').on('click',function(){
// перехід до попереднього слайду
$('.slick-slider').slick('slickPrev');	
});
