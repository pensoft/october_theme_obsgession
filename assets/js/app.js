$(window).scroll(animateNumbers);

var viewed = false;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};

var width = $(window).width();

window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    var logo = document.getElementById("navbar-brand");
    if(headernavbar && logo){
        if (window.scrollY > headernavbar.offsetHeight){
            var headerNavbarNav = document.querySelector('#headerNavbarNav')
            headernavbar.classList.add('scrolled');
            logo.classList.add('scrolled');
        }else{
            headernavbar.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    }

});

$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}


    if (width > 990) { // desktop
        $("#menuToggle input").on("mouseover", function () {
            this.checked = !this.checked;
            $('#menu').show();
            $('#search').hide();
            $('#menu, #menu *').css({
                'visibility': 'visible'
            });
        });


        $("#menu").on("mouseenter", function () {
            $("#menuToggle input").prop("checked", true);
            $('#search').hide();
            $('#menu, #menu *').css({
                'visibility': 'visible'
            });
        }).on("mouseleave", function () {
            if ($("#search").is(':visible')) {
                $("#menuToggle input").prop("checked", true);
            } else {
                $("#menuToggle input").prop("checked", false);
            }
        });
    }

    if (width < 990) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show();
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide();
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });

    }

    var loggedInMenuNavbar = $('.navbar-loggedin-user');
    loggedInMenuNavbar.find('#menu').removeAttr('id');


	var headerNavbar = $('#headerNavbar');
	var width100 = $('.width100');
	var innerWidth = $('body').innerWidth();
	headerNavbar.width(innerWidth);
	width100.width(innerWidth);

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

    if (width < 1200) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }

	var count = $("h1").text().length;

	$('.numbers').attr('data-aos', 'fade-up');
	$('.mission .container').attr('data-aos', 'fade-up');
	$('.vision .container').attr('data-aos', 'fade-up');
	$('.goals .container').attr('data-aos', 'fade-up');
	$('.card-img-top').attr('data-aos', 'fade-up');
	$('.logo-container').attr('data-aos', 'fade-up');
	$('.subscribe-items a').attr('data-aos', 'fade-up');
	$('.icons a').attr('data-aos', 'fade-up');
	$('.about h1.display-1').attr('data-aos', 'fade-up');
	$('h2.underline').attr('data-aos', 'fade-up');
	$('.news_column').attr('data-aos', 'fade-up');
	// $('.timeline-item').attr('data-aos', 'fade-up');

	// about page

	$('.about img').attr('data-aos', 'fade-up');

	$('.country_map').attr('data-aos', 'fade-up');
	$('.partner-item').attr('data-aos', 'fade-up');

	// media
	$('.flyer_image_container img').attr('data-aos', 'fade-up');
	$('.broshure_and_poster img').attr('data-aos', 'fade-up');
	$('.card-container').attr('data-aos', 'fade-up');
	$('.coordinator_image').attr('data-aos', 'fade-up');
	$('.objectives ul li').attr('data-aos', 'fade-up');
	$('.the_project').attr('data-aos', 'fade-right');
	$('.the_project2').attr('data-aos', 'fade-left');

	$('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function() {
        return (innerWidth - $('.container').width())/2;
    });
    $(".timeline_container.right .blue_line").width(function() {
        var more = 250;
        if($(this).parent().find('.about-what').length){
            var more = 300;
        }
        if($(this).parent().find('.jpi-with').length){
            var more = 140;
        }
        return (innerWidth - $('.container').width())/2 + more;
    });


    $( window ).on( "load", function() {
        $(".projects_services .accordion-border").each(function(k, v) {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
            $(this).removeClass("ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active");
        });

        $('.projects_services .col-md-6').each(function(k, v){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
        });
        $('.projects_services .col-md-6').hover(function (){
            $(this).removeClass('ui-state-hover');
        });
        $('.projects_services .col-md-6').click(function (){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
        });

        $('.projects_services .accordion-border').click(function (){
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
        });
    } );


    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/working-documents-live.svg) center center no-repeat; background-size: 100px; height: 200px" href="https://fondationbiodiversite.sharepoint.com/sites/OBSGESSION/Documents%20partages/Forms/AllItems.aspx" target="_blank" title="Working documents (live)"></a>\n' +
        '<h3 class="card-header"><a href="https://fondationbiodiversite.sharepoint.com/sites/OBSGESSION/Documents%20partages/Forms/AllItems.aspx" target="_blank" title="Working documents (live)">Working documents (live)</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());

    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/forms.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/reporting-forms" title="Reporting forms"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/reporting-forms" title="Forms">Reporting forms</a></h3>\n' +
        '</div>').insertAfter($('.card.internal:nth-child(5)'));

    $('<div class="mark"></div>').insertAfter($('.group-holder input'));

    // bootstrap 3 breakpoints
    const breakpoint = {
        // extra small screen / phone
        xs: 280,
        // small screen / tablet
        sm: 768,
        // medium screen / desktop
        md: 992,
        // large screen / large desktop
        lg: 1200
    };

// bootstrap 3 responsive multi column slick carousel
    if($('#slick').length){
        $('#slick').slick({
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 3,
            focusOnSelect: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if ($('#slick_news').length) {
        $('#slick_news').slick({
            centerMode: true,
            variableWidth: true,
            infinite: true,
            slidesToShow: 1,//TODO
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        dots: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

    }

    $('body').on('click', '.work_packages .accordion-toggle, .messages .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".plusminus").html('<span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".plusminus").html('<span class="minus"></span>');
        }
    });

    $('.work_packages .accordion-content, .pilots .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if($("#"+anchorId).offset()){
            $('html, body').animate({
                scrollTop: $("#"+anchorId).offset().top - 150
            }, 500);
        }else{
            $('.accordion-border').each(function(){
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger( "click" );
                }
            });
        }
    }

    $('.dropdown a').click(function(event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if($("#"+anchorId).length>0){
                $('html, body').animate({
                    scrollTop: $("#"+anchorId).offset().top - 150
                }, 500);
            }else{
                // event.preventDefault();
                $("path[title='"+anchorId.toUpperCase()+"']").addClass('active_path');

                $('.accordion-border').each(function(){
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger( "click" );
                        event.preventDefault();
                    }
                });
            }
        }
    });


    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });

    $(".partner_description a").click(function() {
        var $el, $ps, $up, totalHeight;
        totalHeight = 75;
        $el = $(this) // read-more link

        $up  = $el.parent(); // partner_description
        if ($el.text() == "Read more") {

            $ps = $up.find(".partner_content p");

            // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
            $ps.each(function() {
                totalHeight += $(this).outerHeight();
            });

            $up.addClass('changed');

            $el.css({
                top: totalHeight - 14
            });
            $up.css({
                // Set height to prevent instant jumpdown when max height is removed
                "height": $up.height() - 45,
                "max-height": 9999,
            })
                .animate({
                    "height": totalHeight
                });
            //Stuff to do when btn is in the read more state
            $el.html("<a href=\"javascript:void(0);\">Read less</a>");
            // $up.slideDown();
        } else {
            $up.removeClass('changed');
            $el.css({
                top: 100
            });
            $up.css({
                // Set height to prevent instant jumpdown when max height is removed
                "height": $up.height(),
                "max-height": 460,
            })
                .animate({
                    "height": totalHeight + 65
                });
            //Stuff to do when btn is in the read less state
            $el.html("<a href=\"javascript:void(0);\">Read more</a>");

            $('html, body').animate({
                scrollTop:  $up.offset().top - $('header').height()
            });
        }
        return false;

    });
});

function animateNumbers() {
    if (isScrolledIntoView($(".numbers")) && !viewed) {
        viewed = true;
        $('.count').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1800,
                easing: 'swing',
                step: function (now) {
                    $(this).text(parseFloat(now).toFixed(size));
                }
            });
        });
    }
}


function onHashChange(){
	$("path").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("path[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');

		$('.pilots .accordion-border').each(function(){
			var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
			var toggler = $(this).find(".accordion-toggle");
			if ( title.indexOf(caseStudiesTitle.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
				toggler.trigger( "click" );
			}
		});
	}
}

function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

function appendProfile() {
    $(document).on('profile', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item"><a href="/profile" target = "_self">Profile</a></li >';
        headerNavbarNav.find('>ul').append(li);
    });
}
function appendSignIn(){
    $(document).on('signin', function (e) {
        var headerNavbarLogin = $('#headerNavbarNav');
        var li = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';
		headerNavbarLogin.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'">Logout</a></li >';
        headerNavbarNav.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSearchAndSocialMedia(){
	var liSearch = '<li class="nav-item search_field"><a href=\"javascript: void(0);\" onclick=\"showSearchForm();\"></a></li>';
	var liSocial = '<li class="nav-item social">' +
        '<a href=\"https://twitter.com/obsgession\" target=\"_blank\" class=\"pr p-twitter big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.linkedin.com/company/OBSGESSION/\" target=\"_blank\" class=\"pr p-linkedin big\" target=\"_blank\"></a></li>';
	var menu = $('#menuToggle');
	menu.find('>ul').append(liSearch).append(liSocial);
}

function getScreenSize() {
    var myHeight = 0;
    var myWidth = 0;
    if (window.innerWidth && window.innerHeight) {
        // Netscape & Mozilla
        myHeight = window.innerHeight;
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE > 6
        myHeight = document.documentElement.clientHeight;
        myWidth = document.documentElement.clientWidth;
    } else if (document.body.offsetWidth && document.body.offsetHeight) {
        // IE = 6
        myHeight = document.body.offsetHeight;
        myWidth = document.body.offsetWidth;
    } else if (document.body.clientWidth && document.body.clientHeight) {
        // IE < 6
        myHeight = document.body.clientHeight;
        myWidth = document.body.clientWidth;
    }

    return {'width': myWidth, 'height': myHeight};
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}


function showSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').toggle();
    $('.navbar a.p-search').css('visibility', 'hidden');
}

function hideSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').hide();
    $('.navbar a.p-search').css('visibility', 'visible');
}

function requestFormLibrary() {
	$('#mylibraryForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function requestFormPartners() {
	$('#myPartnersForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	if($(elem).height()){
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	return;

}

function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}

function onMapCustomPartners(code) {
		$('.partner-item').removeClass('active_partner');
		$.request('onPartners', {
			update: { 'components/partners_list': '#mycomponentpartners',
			},
			data: {
                code: code
			},
		}).then(response => {
            $('html, body').animate({
                scrollTop: $("#mycomponentpartners").offset().top - 200
            }, 1000);
            var tooltip = document.getElementById("tooltip");
            tooltip.classList.remove("active");
		});
}


function hideMe(elem){
    $(elem).parent().hide();
}

function fetchMails(i, searchStr){
    // $('.group_mailing_list').hide();
    if($('.group_mailing_list_'+i).is(":visible")){
        $('.group_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchMailingList', {
            update: { 'mailing_list': '#mailing_list_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.group_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.mailing_list);
        });
        $('.group_mailing_list').hide();
        $('.group_mailing_list_'+i).show();
    }

}


function fetchSingleMail(i, searchStr){
    if($('.single_mailing_list_'+i).is(":visible")){
        $('.single_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchSingleMail', {
            update: { 'individual_email': '#individual_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.single_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.individual_email);
        });
        $('.single_mailing_list').hide();
        $('.single_mailing_list_'+i).show();
    }
}

function initMailingTooltip(){
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $(this).parent().css('display', 'inline-grid');
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_'+i+'" onclick="fetchMails('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $('<div class="group_mailing_list group_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());


    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_individuals_'+i+'" onclick="fetchSingleMail('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $(this).parent().css('display', 'inline-grid');
        $('<div class="single_mailing_list single_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());
    });

    $('.group-holder').eq(0).prepend( "<p style='margin-left: 10px; width: 100%;'>Prior to sending group emails, please make sure that all individuals you want to contact have been included in the respective group by clicking on the group icon.</p><p></p>" );
    $('.group-holder').eq(1).prepend( "<p style='margin-left: 10px; width: 100%;'>To see each person’s email, click on the account icon.</p><p></p>" );

}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
            }
        }
		appendSearchAndSocialMedia()
		requestFormLibrary()

    });
    // appendProfile()
    // appendSignIn()
    // appendSignOut()
}


window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    if (window.scrollY > headernavbar.offsetHeight){
        var headerNavbarNav = document.querySelector('#headerNavbarNav')
        headernavbar.classList.add('scrolled');
        headernavbar.classList.add('fixed');

    }else{
        headernavbar.classList.remove('scrolled');
    }
});

init()
