$(document).ready(function() {
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		  $(".js-select-list").slideUp(100);
	});
	
	// select list
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}
	   
	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;
		
	});
  

	//scroll
	$(window).load(function() {
		if ($('.js-scroll').length) {
			var element = $('.js-scroll').jScrollPane({
				verticalDragMinHeight: 20,
				verticalDragMaxHeight: 87,
			});
			var api = element.data('jsp');
			api.reinitialise(s);
		};		
	});
	$(window).resize(function() {
		if ($('.js-scroll').length) {
			var element = $('.js-scroll').jScrollPane({
				verticalDragMinHeight: 20,
				verticalDragMaxHeight: 87,
			});
			var api = element.data('jsp');
			api.reinitialise(s);
		};
	});

	//slider
	if ($('.js-slick').length) {
		$('.js-slick-for').slick({
			asNavFor: '.js-slick-nav',
			infinite: false,
			slidesToShow: 1,
			centerMode: true,
			centerPadding: '28%',
			slidesToScroll: 1,
			arrows: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						centerPadding: '0',
						fade: true,
					}
				}
			]
		});
		$('.js-slick-nav').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.js-slick-for',
			infinite: false,
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			fade: true,
		});
		$('.js-slick-cfor').slick({
			asNavFor: '.js-slick-cnav',
			infinite: false,
			slidesToShow: 1,
			centerMode: true,
			centerPadding: '28%',
			slidesToScroll: 1,
			arrows: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						centerPadding: '0',
						fade: true,
					}
				}
			]
		});
		$('.js-slick-cnav').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.js-slick-cfor',
			infinite: false,
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			fade: true,
		});

		$('.js-slick-right').on('click', function() {
			$(this).parents('.l-slider').find('.slick-next').trigger('click');
		});
		$('.js-slick-left').on('click', function() {
			$(this).parents('.l-slider').find('.slick-prev').trigger('click');
		});
		$(window).resize(function() {
			$('.js-slick-right').on('click', function() {
				$(this).parents('.l-slider').find('.slick-next').trigger('click');
			});
			$('.js-slick-left').on('click', function() {
				$(this).parents('.l-slider').find('.slick-prev').trigger('click');
			});
		});
	};

	

	//animation land
	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height()/2;
		var start_visibility = window_top + window_height;
	  
		$(".visibility").each(function(){
		
			var block_position = $(this).offset().top;

			if(start_visibility >= block_position){
				$(this).addClass('is-visible');
			};
		});
	}
	visibility();
	$(window).scroll(function(){
		visibility();
	});
	$(window).load(function(){
		visibility();
	});

});