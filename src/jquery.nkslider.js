;(function($) {

	$.fn.nkslider = function(option) {

		var defaults = {size: 300};
		var option = $.extend(defaults,option);

	$(function() {
			var $slider = $('.slider');

			setInterval(slider, 2000);

			function slider() {

				var wrap = $slider.width(),
				size = - defaults.size,
				int = parseInt(size),
				sAbs = Math.abs(int),
				left = $slider.css('left'),
				mLeft = parseInt(left),
				slideSize = Math.abs(mLeft);

				if(slideSize >= wrap - sAbs) {
					$slider.animate({left: '0'}, 'slow');
				} else {
					$slider.animate({left: '+=' + int + 'px'}, 'slow');
				}
			}

		});

		// slider2
		$(function() {

			var $slider = $('.slider--2'),
			$prev = $('span:first-child'),
			$next = $('span:nth-child(2)'),
			$item = $('.slider__item--2'),

			wrap = $slider.width(),
			size = - defaults.size,
			int = parseInt(size),
			sAbs = Math.abs(int),
			left,
			mLeft,
			slideSize = Math.abs(mLeft),
			item = $item.length,
			clickCount = 1;

			$prev.click(function() {
				if(clickCount <= 1) {
					return false;
				} else {
					$slider.animate({left: '+=' + sAbs + 'px'}, 'slow');
					clickCount--;
				}

			});

			$next.click(function() {
				left = $slider.css('left');
				mLeft = Math.abs(left);

				if(clickCount > item - 1) {
					return false;
				} else {
					$slider.animate({left: '+=' + int + 'px'}, 'slow');
					clickCount++;
				}

			});

		});

		return(this);
	};
})(jQuery);
