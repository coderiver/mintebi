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

	$('.js-slick').slick({
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

	$('.js-slick-right').on('click', function() {
		$('.slick-next').trigger('click');
	});
	$('.js-slick-left').on('click', function() {
		$('.slick-prev').trigger('click');
	});
	$(window).resize(function() {
		$('.js-slick-right').on('click', function() {
			$('.slick-next').trigger('click');
		});
		$('.js-slick-left').on('click', function() {
			$('.slick-prev').trigger('click');
		});
	});
});