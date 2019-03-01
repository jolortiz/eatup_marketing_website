var runAnimationOnce = true;
var runScreenAnimation = true;
var runScreenAnimation2 = true;
var navBarTrigger = false;
var initialRun = true;  // this keeps track of the first run of a render
$(window).scroll(function() {
    // number counter animation
    if (isScrolledIntoView(document.getElementById('counter'))) {
        if (runAnimationOnce) {
            triggerCount();
            runAnimationOnce = false;
        }
    } else {
        runAnimationOnce = true;
    }
    // second screenshot animation
    if (isScrolledIntoView(document.getElementById('screen2ani')) && runScreenAnimation) {
        console.log('screen 2 animating');
        var element = document.getElementById('imgscreen2');
        element.style.display = 'block';
        element.classList.add('animated', 'fadeInLeft');
        runScreenAnimation = false;
    }
    // third screenshot animation
    if (isScrolledIntoView(document.getElementById('screen3ani')) && runScreenAnimation2) {
        console.log('screen 3 animating');
        var element = document.getElementById('imgscreen3');
        element.style.display = 'block';
        element.classList.add('animated', 'fadeInRight');
        runScreenAnimation2 = false;
    }
    // turn the nav bar white and back when needed
    if (initialRun) {
        if (isScrolledOutOfView(document.getElementById('nav-trig'))) {
            console.log('invisible');
            navBarTrigger = true;
        }
        initialRun = false;
    }
    if (isScrolledOutOfView(document.getElementById('nav-trig')) && navBarTrigger) {
        var element = document.getElementById('nav-background');
        element.style.backgroundColor = '#FFFFFF';
        element.classList.remove('animated', 'fadeOut');
        element.classList.add('animated', 'fadeIn');
        navBarTrigger = false;
    } else if (!isScrolledOutOfView(document.getElementById('nav-trig')) && !navBarTrigger){
        console.log('visible');
        var element = document.getElementById('nav-background');
        element.classList.remove('animated', 'fadeIn');
        element.classList.add('animated', 'fadeOut');
        //element.style.backgroundColor = 'transparent';
        navBarTrigger = true;
    }
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function isScrolledOutOfView(el) {
    var rect = el.getBoundingClientRect();
    var elemBottom = rect.bottom;
    var isNotVisible = (elemBottom <= 0);
    return isNotVisible;
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