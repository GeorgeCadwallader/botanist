import $ from 'jQuery';

var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;

        if ($(e.target).parents('.image-container').length > 0) {
            var climbing = $('#climbing')[0];

            if (!ambience.paused) {
                climbing.volume = 0.5;
            } else {
                climbing.volume = 0.2;
            }

            climbing.play();
        }
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
        msg.volume = 0.5;
        window.speechSynthesis.speak(msg);
    });

    var highlightText = function(id) {
        document.querySelector('.text-' + id).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    $('g#one').on('click', function() {
        highlightText(this.id);
    });

    $('g#two').on('click', function() {
        highlightText(this.id);
    });

    $('g#three').on('click', function() {
        highlightText(this.id);
    });

    $('g#four').on('click', function() {
        highlightText(this.id);
    });

    $('g#five').on('click', function() {
        highlightText(this.id);
    });

    $('g#six').on('click', function() {
        highlightText(this.id);
    });

    $('g#seven').on('click', function() {
        highlightText(this.id);
    });

    $('g#eight').on('click', function() {
        highlightText(this.id);
    });

    $('g#nine').on('click', function() {
        highlightText(this.id);
    });
});