var runAnimationOnce = true;
var runScreenAnimation = true;
var runScreenAnimation2 = true;
$(window).scroll(function() {
    if (isScrolledIntoView(document.getElementById('counter'))) {
        console.log('visible');
        if (runAnimationOnce) {
            triggerCount();
            runAnimationOnce = false;
        }
    } else {
        console.log('not visible');
        runAnimationOnce = true;
    }
    if (isScrolledIntoView(document.getElementById('screen2ani')) && runScreenAnimation) {
        console.log('screen 2 animating');
        var element = document.getElementById('imgscreen2');
        element.style.display = 'block';
        element.classList.add('animated', 'fadeInLeft');
        runScreenAnimation = false;
    }
    if (isScrolledIntoView(document.getElementById('screen3ani')) && runScreenAnimation2) {
        console.log('screen 3 animating');
        var element = document.getElementById('imgscreen3');
        element.style.display = 'block';
        element.classList.add('animated', 'fadeInRight');
        runScreenAnimation2 = false;
    }
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function triggerCount() {
    var numArray = [100, 5, 600];
    var i = 0;
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: numArray[i]
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: function () {
                //$(this).text('400,000');
            }
        });
        i++; // increment the counter
    });
}

