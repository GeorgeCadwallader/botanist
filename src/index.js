import $ from 'jQuery';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
import Chart from 'chart.js';

$(document).ready(function() {

    var popularChart = new Chart(document.getElementById('popularChart'), {
        type: 'bar',
        data: {
            labels: ['Rice', 'Beans', 'Wheat', 'Sugarcane', 'Maize', 'Soybeans'],
            datasets: [
                {
                    label: 'Most popular plant (million)',
                    data: [18, 16, 51, 11, 22, 5],
                    backgroundColor: [
                        'rgba(81, 163, 62, 1)',
                        'rgba(81, 163, 62, 1)',
                        'rgba(81, 163, 62, 1)',
                        'rgba(81, 163, 62, 1)',
                        'rgba(81, 163, 62, 1)',
                        'rgba(81, 163, 62, 1)'
                    ],
                    borderColor: [
                        'rgba(71, 143, 54, 1)',
                        'rgba(71, 143, 54, 1)',
                        'rgba(71, 143, 54, 1)',
                        'rgba(71, 143, 54, 1)',
                        'rgba(71, 143, 54, 1)',
                        'rgba(71, 143, 54, 1)',
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sales of plant (billion)',
                    data: [337, 55, 84, 65, 17, 57],
                    backgroundColor: [
                        'rgba(234, 237, 55, 1)',
                        'rgba(234, 237, 55, 1)',
                        'rgba(234, 237, 55, 1)',
                        'rgba(234, 237, 55, 1)',
                        'rgba(234, 237, 55, 1)',
                        'rgba(234, 237, 55, 1)'
                    ],
                    borderColor: [
                        'rgba(217, 219, 61, 1)',
                        'rgba(217, 219, 61, 1)',
                        'rgba(217, 219, 61, 1)',
                        'rgba(217, 219, 61, 1)',
                        'rgba(217, 219, 61, 1)',
                        'rgba(217, 219, 61, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var positions = [
        'Flower',
        'Main shoot',
        'Flower buds',
        'Leaves',
        'Leaf stalks',
        'The stem',
        'Small shoots',
        'Main root',
        'The root'
    ];

    new Sortable(document.getElementById('sortQuiz'), {
        animation: 150,
    });

    var changeAlertClass = function(element, type) {
        if (element.hasClass('alert-' + type)) {
            return;
        }

        element.removeClass();
        element.addClass('alert alert-' + type);
    }

    $('.font-option').on('click', function () {
        let fontSize = $(this).data('size');

        $('.font-increase').each(function (i, el) {
            $(el).css('font-size', 'initial');
            let currentSize = $(el).css('font-size');
            
            $(el).css('font-size', parseInt(currentSize.replace('px', '')) + parseInt(fontSize));
        });
    });

    $('#check-btn').on('click', function() {
        let items = $('#sortQuiz');
        let alert = $('#quizAlert');

        var isCorrect = false;

        items.children().each(function () {
            if (positions[$(this).index()] !== $(this).text()) {
                changeAlertClass(alert, 'danger');
                alert.text('Sorry, you are incorrect. Try again!');
                return false;
            }

            changeAlertClass(alert, 'success');
            alert.text('Well done, you have got all the positions correct!');
            isCorrect = true;
        });
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