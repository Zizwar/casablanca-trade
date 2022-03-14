// JavaScript Document

function google_business_reviews_rating(e, i) {
	if (typeof e == 'undefined') {
		var e = null;
	}
	else if (typeof e == 'string' && e.match(/^[\d]+$/)) {
		e = parseInt(e);
	}
		
	if (typeof i == 'undefined') {
		var i = null;
	}
	else if (typeof i == 'string') {
		i = parseInt(i.replace(/[^\d]/, ''));
	}
	
	if ((typeof e == 'number' || typeof e == 'object' || typeof e == 'string') && typeof i == 'number') {
		if (typeof e == 'object') {
			e = jQuery('.google-business-reviews-rating').index(e);
		}
		else if (typeof e == 'string') {
			e = jQuery('.google-business-reviews-rating').index(jQuery('#' + e));
		}
		
		jQuery('.review-full-text:eq(0)', '.google-business-reviews-rating:eq(' + e + ') li:eq(' + i + ')').show();
		jQuery('.review-more-link:eq(0)', '.google-business-reviews-rating:eq(' + e + ') li:eq(' + i + ')').remove();
		return;
	}
	
	var stars_width_multiplier = null,
		rating = null,
		rating_width = null,
		safari = navigator.userAgent.match(/^((?!chrome|android).)*safari/i),
		clear_styles = (jQuery('#stylesheet').length && jQuery('#stylesheet:visible:checkbox').length && !jQuery('#stylesheet:visible:checkbox').is(':checked')),
		star_html = false,
		star_css = false,
		star_image = null,
		overall_link = null,
		reviews_window = null;

	jQuery('.google-business-reviews-rating').each(function(index) {
		if (jQuery(this).hasClass('widget')) {
			jQuery(this).removeClass('google-business-reviews-rating').addClass('google-business-reviews-rating-widget');
			return;
		}
		
		var e = jQuery(this),
			star_html = (typeof jQuery(this).attr('class') == 'string' && (jQuery(this).hasClass('stars-html') || jQuery(this).attr('class').match(/\bversion[_-]?1\b/i))),
			star_css = (!star_html && typeof jQuery(this).attr('class') == 'string' && (jQuery(this).hasClass('stars-css') || jQuery(this).hasClass('stars-gray-css'))),
			stars_width_multiplier = 0.196,
			rating = (jQuery('.number', this).length) ? parseFloat(jQuery('.number:eq(0)', this).text().replace(/,/g, '.').replace(/(\d+(?:\.\d+)?)/, '$1')) : null,
			overall_link = (typeof jQuery(this).data('href') == 'string' && jQuery(this).data('href').length && !jQuery('.buttons', this).length && (!jQuery('.listing', this).length || jQuery('.listing', this).length && !jQuery('.listing > *', this).length)) ? jQuery(this).data('href') : null;
		
		if (clear_styles) {
			jQuery(this).removeAttr('class');
		}
		else if (!jQuery(this).prop('id').length && !jQuery(this).parent().hasClass('widget') && !jQuery(this).parent().hasClass('widget-content')) {
			jQuery(this).prop('id', 'google-business-reviews-rating' + ((index > 0) ? '-' + index : ''));
		}
		
		if (!clear_styles && jQuery(this).hasClass('no-styles')) {
			jQuery(this).removeAttr('class');
		}
		
		if (jQuery(this).hasClass('link')) {
			if (overall_link != null) {
				jQuery(this).on('click', { overall_link: overall_link }, function(event) {
					if (!jQuery(event.target).is('a')) {
						event.preventDefault();
						if (event.data.overall_link.match(/^\/.*$/)) {
							document.location.href = event.data.overall_link;
						}
						else {
							reviews_window = window.open(event.data.overall_link, '_blank');
							reviews_window.focus();
						}
						return false;
					}
				});
			}
			else {
				jQuery(this).removeClass('link');
			}
			
			jQuery(this).removeData('href').removeAttr('data-href');
		}
		
		if (!star_html && jQuery('.star', jQuery('.all-stars', e)).length) {
			if (star_css) {
				if (!jQuery('.rating-stars', e).length) {
					jQuery('.all-stars', e).append('<span class="rating-stars star temporary" style="display: none;">.</span>');
				}
				
				if (!jQuery('.star.gray', e).css('color')) {
					jQuery('.all-stars', e).append('<span class="star gray temporary" style="display: none;">.</span>');
				}
				
				if (typeof jQuery('.star.gray', e).css('color') == 'string' && !jQuery('.rating-stars', e).css('color').match(/^(?:#E7711B|rgba?\s*\(23[12],\s*11[34],\s*2[78](?:,\s*1(?:\.0+)?)?\))$/i)) {
					jQuery(e).data('stars', jQuery('.rating-stars', e).css('color'));
				}
				
				if (typeof jQuery('.star.gray', e).css('color') == 'string' && (!jQuery(e).hasClass('dark') && !jQuery('.star.gray', e).css('color').match(/^(?:#C1C1C1|rgba?\s*\(193,\s*193,\s*193(?:,\s*1(?:\.0+)?)?\))$/i) || jQuery(e).hasClass('dark') && !jQuery('.star.gray', e).css('color').match(/^(?:#B4B4B4|rgba?\s*\(180,\s*180,\s*180(?:,\s*0?\.8)?\))$/i))) {
					jQuery(e).data('stars-gray', jQuery('.star.gray', e).css('color'));
				}
				
				if (jQuery('.temporary', jQuery('.all-stars', e)).length) {
					jQuery('.temporary', jQuery('.all-stars', e)).remove();
				}
			}

			if (typeof jQuery(e).data('stars') == 'string' && jQuery(e).data('stars').length && !jQuery(e).data('stars').match(/^#E7711B$/i) || typeof jQuery(e).data('stars-gray') == 'string' && jQuery(e).data('stars-gray').length && !jQuery(e).data('stars-gray').match(/^#C1C1C1$/i)) {
				if (star_css && (typeof jQuery(e).data('stars-gray') != 'string' || typeof jQuery(e).data('stars-gray') == 'string' && jQuery(e).data('stars-gray') == 'css') && !jQuery('.star.gray', jQuery('.all-stars', e)).length) {
					jQuery('.all-stars', e).append('<span class="temporary" style="display: none;">.</span>');
				}
				
				jQuery('.star', jQuery('.all-stars', e)).each(function() {
					try {
						star_image = atob(jQuery(this).css('background-image').replace(/^url\(["']data:image\/svg\+xml;charset=UTF-8;base64,(.+)["']\)$/, '$1'));
						
						if (typeof jQuery(e).data('stars') == 'string' && !jQuery(e).data('stars-gray').match(/^#E7711B$/i)) {
							star_image = star_image.replace(/#E7711B/g, jQuery(e).data('stars'));
						}
	
						if (typeof jQuery(e).data('stars-gray') == 'string' && jQuery(e).data('stars-gray').length && !jQuery(e).data('stars-gray').match(/^#C1C1C1$/i)) {
							star_image = star_image.replace(/#C1C1C1/g, jQuery(e).data('stars-gray'));
						}
	
						jQuery(this).css('background-image', 'url(\'data:image\/svg+xml;charset=UTF-8;base64,' + btoa(star_image) + '\')');
					}
					catch (err) {
						return;
					}
				});
			}
		}
		
		if (jQuery('.review-more-placeholder', e).length) {
			jQuery('.review-more-placeholder', e).each(function(more) {
				if (jQuery(this).siblings('.review-full-text').length && !jQuery(this).siblings('.review-full-text').html().length) {
					jQuery(this).parent().removeClass('text-excerpt');
					jQuery(this).siblings('.review-full-text').remove();
					jQuery(this).remove();
				}
				else if (jQuery(e).hasClass('js-links')) {
					jQuery(this).after('<a href="javascript:google_business_reviews_rating(' + index + ', ' + jQuery('li', jQuery(e)).index(jQuery(this).closest('li')) + ');" class="review-more-link">' + jQuery(this).html() + '</a>');
					jQuery(this).remove();
				}
				else {
					jQuery(this).after('<a href="#' + e.prop('id') + '" class="review-more-link">' + jQuery(this).html() + '</a>');
					jQuery('.review-more-link', jQuery(this).parent()).on('click', function(event) {
						event.preventDefault();
						jQuery(this).next('.review-full-text').show();
						jQuery(this).remove();
						return false;
					});
					jQuery(this).remove();
				}
			});
		}
		
		if (!star_html && jQuery('.all-stars', e).length && jQuery('.all-stars', e).hasClass('animate') && typeof rating == 'number' && rating > 1.5 && jQuery('.number:eq(0)', e).length) {
			jQuery('.all-stars', e)
				.after(jQuery('<span>')
					.addClass('all-stars')
					.addClass('backdrop')
					.css({
						width: Math.ceil(jQuery('.all-stars', e).width() + 0.1) + 'px',
						margin: '0 0 0 ' + (-1 * jQuery('.all-stars', e).width() - 0.1) + 'px'
						})
					.html('<span class="star gray"></span><span class="star gray"></span><span class="star gray"></span><span class="star gray"></span><span class="star gray"></span>'));
					
			if (jQuery('.all-stars:eq(0)', e).position().top - jQuery('.all-stars.backdrop', e).position().top != 0) {
				jQuery('.all-stars.backdrop', e).css('margin-top', (jQuery('.all-stars:eq(0)', e).position().top - jQuery('.all-stars.backdrop', e).position().top) + 'px');
			}

			if (typeof jQuery(e).data('stars-gray') == 'string' && jQuery(e).data('stars-gray').length && !jQuery(e).data('stars-gray').match(/^#C1C1C1$/i)) {
				jQuery('.star', jQuery('.all-stars.backdrop', e)).each(function() {
					try {
						star_image = atob(jQuery(this).css('background-image').replace(/^url\(["']data:image\/svg\+xml;charset=UTF-8;base64,(.+)["']\)$/, '$1'));
						star_image = star_image.replace(/#C1C1C1/g, jQuery(e).data('stars-gray'));
						jQuery(this).css('background-image', 'url(\'data:image\/svg+xml;charset=UTF-8;base64,' + btoa(star_image) + '\')');
					}
					catch (err) {
						return;
					}
				});
			}

			jQuery('.star:last', jQuery('.all-stars:eq(0)', e)).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
				if (jQuery('.all-stars.backdrop', e).length) {
					jQuery('.all-stars.backdrop', jQuery(this).closest('.rating')).fadeOut(300, function() { jQuery(this).remove(); });
				}
			});
			
			setTimeout(
				function() {
					if (jQuery('.all-stars.backdrop', e).length) {
						jQuery('.all-stars.backdrop', e).fadeOut(300, function() { jQuery(this).remove(); });
					}
				}, 4800);
		}
		else if (star_html && typeof rating == 'number') {
			if (safari) {
				jQuery('.all-stars', e).addClass('safari');
			}
				
			if (rating == 5) {
				jQuery('.all-stars', e).css('color', 'rgba(0, 0, 0, 0)');
			}
			else if (rating == 0) {
				jQuery('.rating-stars', e).remove();
			}
			
			if (jQuery('.rating-stars', e) && jQuery('.all-stars', e).length) {
				if (typeof jQuery('.rating-stars', e).data('multiplier') == 'number') {
					stars_width_multiplier = jQuery('.rating-stars', e).data('multiplier');
				}
				
				rating_width = Math.round(jQuery('.all-stars', e).width() * rating * stars_width_multiplier + stars_width_multiplier * 0.05 * Math.sin(rating * 2 * Math.PI) + 0.5 * stars_width_multiplier * (Math.round(rating + 0.49) - rating));
				jQuery('.rating-stars', e).width(rating_width).css({ margin: '0 ' + (-1 * rating_width) + 'px 0 0' });
			}
		}
	});
	return;
}

jQuery(document).ready(function($){
	google_business_reviews_rating();
	return;
});
