var
	classBlock = 'slider',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$block = $(this),
		$slider = $block.find('.' + classBlock + '__body'),
		sliderCols = +$block.attr('data-cols') || 1,
		sliderSmCols = +$block.attr('data-sm-cols') || sliderCols || 1,
		sliderMdCols = +$block.attr('data-md-cols') || sliderSmCols || sliderCols || 1,
		sliderLgCols = +$block.attr('data-lg-cols') || sliderMdCols || sliderCols || 1,
		sliderXlCols = +$block.attr('data-xl-cols') || sliderLgCols || sliderCols || 1;

	$slider.slick({
		prevArrow: '<div class="arrow arrow_left ' + classBlock + '__arrow ' + classBlock + '__arrow_prev"></div>',
		nextArrow: '<div class="arrow ' + classBlock + '__arrow ' + classBlock + '__arrow_next"></div>',
		appendArrows: $block,
		slidesToShow: sliderCols,
		slidesToScroll: sliderCols,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: sliderSmCols,
					slidesToScroll: sliderSmCols
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: sliderMdCols,
					slidesToScroll: sliderMdCols
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: sliderLgCols,
					slidesToScroll: sliderLgCols
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: sliderXlCols,
					slidesToScroll: sliderXlCols
				}
			}
		]
	});
});