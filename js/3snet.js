$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.bxslider').bxSlider({
    auto: true,
    controls: false,
    minSlides: 1,
    maxSlides: 5,
    moveSlides: 1,
    slideWidth: 1100,
    slideMargin: 1
});

$(document).ready(function() {
	var langByURL = getURLParameter('lang');
	if (langByURL) {
		switch(langByURL.toLowerCase()) {
			case 'ru':
				setLang(1);
				break;
			case 'en':
				setLang(2);
				break;
			default:
				setLang(1);
				break;
		}
	} else {
		changeLang();
	}

	$( ".partners-list-btn" ).on('click', function() {
		$( ".partners-list-btn" ).toggleClass('active');
		$( ".partners-other" ).toggle('normal');
		$( ".show-list, .hide-list" ).toggle();
	});
});

function setLang(lang) {
	saveLang(lang);
	changeLang(lang);
}


function changeLang(langNew) {
	var langNum = langNew || getLang() || 1;
	var lang;

	switch(+langNum) {
		case 1:
			lang = ru;
			break;
		case 2:
			lang = en;
			break;
		default:
			lang = ru;
			break;
	}

	$('.lang img').removeClass('active');
	$('.lang img[data-lang=' + langNum + ']').addClass('active');

	$('[data-text]').each(function () {
		var key = $(this).attr('data-text');
		$(this).html(lang[key]);
	})
}

function saveLang(lang) {
	localStorage.setItem('language', lang);
}

function getLang() {
	return localStorage.getItem('language');
}

function getURLParameter(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || ''
	);
}