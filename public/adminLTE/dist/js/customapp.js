/**
 * Created by RizqyFahmi on 07/04/2016.
 */



$(document).ready(function(){

    var base_url = window.location.origin;
    $(".animsition").animsition({
        inClass: 'fade-in-down-sm',
        outClass: 'fade-out-down-sm',
        inDuration: 500,
        outDuration: 500,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        //loadingInner: '<img src="'+getBaseURL()+'/public/adminLTE/dist/img/ripple.svg" />', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        //overlay : false,
        //overlayClass : 'animsition-overlay-slide',
        //overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    $('#testimonials').slick({
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var items = $("#content .col-md-4");
    var numItems = items.length;
    var perPage = 3;
    items.slice(perPage).hide();

    $('#pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "pagination",
        onPageClick: function(pageNumber) { // this is where the magic happens
            // someone changed page, lets hide/show trs appropriately
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            items.hide() // first hide everything, then show for the new page
                .slice(showFrom, showTo).fadeIn('slow');
        }
    });



    setActiveMenu();
});

new WOW().init();

function setActiveMenu(){
    var path = window.location.href;
    var partsOfStr = path.split('/');
    var last = partsOfStr[partsOfStr.length-1];
    $('#navbar-collapse ul li').removeClass('active');
    $('#navbar-collapse ul li[alt='+last+']').addClass('active');
}

function scholarshipBeforLogin(i){
    notify('info', 'Peringatan!', 'Silahkan login terlebih dahulu', 'glyphicon glyphicon-warning-sign');
    $(i).css("background-color", 'transparent');
    $('#login').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
}

function notify(type, title, message, icon) {
    $.notify({
        // options
        icon : icon,
        title: title,
        message : message
        //        url: 'https://github.com/mouse0270/bootstrap-notify',
        //        target: '_blank'
    }, {
        // settings
        element : 'body',
        position : null,
        type : type,
        allow_dismiss : true,
        newest_on_top : false,
        showProgressbar : false,
        placement : {
            from : "top",
            align : "right"
        },
        offset : 20,
        spacing : 10,
        z_index : 1031,
        delay : 3000,
        timer : 1000,
        //        url_target: '_blank',
        //        mouse_over: null,
        animate : {
            enter : 'animated fadeInDown',
            exit : 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div class="notif warning"><h2><span data-notify="icon"></span> {1}</h2><p>{2}</p></div>'
    });
}