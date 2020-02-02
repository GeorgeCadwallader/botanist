import $ from 'jQuery';

var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'grab');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

$(document).ready(function() {

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();

        if (scrollPos > 0) {
            $('.nav-top').css({
                'position': 'sticky',
                'top': '0px'
            });
            $('.site-logo').css({
                'max-width': '55px',
            });
            $('h1').css({
                'font-size': '28px',
            });
            $('.nav-top-author').hide();
        } else {
            $('.nav-top').css({
                'position': 'static'
            });
            $('.site-logo').css({
                'max-width': '100%',
            });
            $('h1').css({
                'font-size': '40px',
            });
            $('.nav-top-author').show();
        }
    });

    $('#start-btn').on('click', function() {
        let height = $(document).height();
        $('body').animate({scrollTop: height});
    });

    var swapIcons = function(element, remove, add) {
        element.removeClass(remove);
        element.addClass(add);
    }

    $('.ambient-btn').on('click', function() {
        var ambience = $('#ambience')[0];
        ambience.volume = 0.1;
        if ($(this).children().hasClass('fa-play')) {
            ambience.play();
            swapIcons($(this).children(), 'fa-play', 'fa-pause');
        } else {
            swapIcons($(this).children(), 'fa-pause', 'fa-play');
            ambience.pause();
        }
    });

    $('.audio-btn').on('click', function() {
        if (window.speechSynthesis.speaking) {
            swapIcons($(this).children(), 'fa-pause', 'fa-volume-up');
            speechSynthesis.cancel();
            return;
        }

        var audioNumber = $(this).data('audio');

        var audioContent = $('.audio-content-' + audioNumber);
        
        var content = '';

        var i;

        for (i = 0; i < audioContent.length; i++) {
            content += audioContent[i].textContent;
        }

        swapIcons($(this).children(), 'fa-volume-up', 'fa-pause');

        let msg = new SpeechSynthesisUtterance(content.trim());
        msg.volume = 0.4;
        window.speechSynthesis.speak(msg);
    });
});