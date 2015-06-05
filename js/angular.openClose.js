angular.module('AccordionTools', [])
.directive('accordionPopup', function() {
	var activeClass = 'active';

	function linkAccordion(scope, element, attrs) {
		var slides = element.find('.market-search').hide();
		var links = element.find('.btn-opener');


		var btnSearchInput = element.find('.btn-search-input');
		var btnAdvanced = element.find('.btn-advanced');

		var searchFilter = element.find('.filter-search').hide();
		var btnClose = element.find('.btn-close').hide();
		var btnSend = element.find('.btn-send').hide();
		var prevIndex = 0;
		var curIndex = 0;
		var animSpeed = 400;

		var defSlide = slides.filter('#default').show();

		element.on('click', '.btn-opener', function(e) {
			e.preventDefault();
			var link = jQuery(this);
			prevIndex = curIndex;
			curIndex = links.index(link);

			if (link.is(btnSearchInput)){
				btnSend.show();
				btnSearchInput.hide();
			}

			if (!element.hasClass(activeClass)){
				element.addClass(activeClass);
				link.addClass(activeClass);
				showSlide();
			} else {
				if (!link.hasClass(activeClass)) {
					links.removeClass(activeClass);
					link.addClass(activeClass);
					changeSlide();
				}
			}
		});

		btnClose.on('click', function(e) {
			e.preventDefault();
			prevIndex = curIndex;
			hideSlide();
		});

		btnSend.on('click', function(e) {
			e.preventDefault();
			prevIndex = curIndex;
			showFilter();
			hideSlide();
		});

		function showSlide() {
			var slide = jQuery(links.eq(curIndex).attr('data-id'));
			btnAdvanced.hide();
			btnClose.show();
			defSlide.stop().fadeOut({
				duration: animSpeed,
				complete: function() {
					slide.stop().fadeIn();
				}
			});
		}

		function showFilter() {
			searchFilter.stop().fadeIn();
		}

		function hideSlide() {
			element.removeClass(activeClass);
			links.removeClass(activeClass);
			btnAdvanced.add(btnSearchInput).show();
			btnClose.add(btnSend).hide();
			var slide = jQuery(links.eq(curIndex).attr('data-id'));

			slide.stop().fadeOut({
				duration: animSpeed,
				complete: function() {
					defSlide.stop().fadeIn();
				}
			});
		}

		function changeSlide() {
			var slide = jQuery(links.eq(curIndex).attr('data-id'));
			var prevSlide = jQuery(links.eq(prevIndex).attr('data-id'));
			prevSlide.stop().fadeOut(function() {
				slide.stop().fadeIn();
			});
		}
	}
	return {
		restrict: 'A',
		link: linkAccordion,
		controller: function( $scope ) {},
		scope: true
	};
});