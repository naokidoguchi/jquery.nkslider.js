;(function($) {

	$.fn.nkslider = function(option) {

		var defaults = {size: 300},
		option = $.extend(defaults,option),
		$slider = this;

		if($slider.attr('class') == 'slider') {
			$(function() {

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
		}
		if($slider.attr('class') == 'slider2') {
			$(function() {

				var $prev = $('span:first-child'),
				$next = $('span:nth-child(2)'),
				$item = $('.slider2 li'),

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
		}
		return(this);
	};
})(jQuery);
