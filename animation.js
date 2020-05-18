scrollFunction();
fadeOutFader();

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    let mainTitle = document.getElementById("scroll-up-smaller").style;
    let headerTitle = document.getElementById("header-title").style;
    if (document.body.scrollTop / document.body.clientHeight > 50 / 790
        || document.documentElement.scrollTop / document.body.clientHeight > 50 / 790) {
        headerTitle.opacity = "1";
        // headerTitle.backdropFilter = "blur(10px)";
        // headerTitle.webkitBackdropFilter = "blur(10px)";
        mainTitle.opacity = "0";
    } else {
        headerTitle.opacity = "0";
        // headerTitle.backdropFilter = "none";
        // headerTitle.webkitBackdropFilter = "none";
        mainTitle.opacity = "1";
    }
}

function fadeOutFader() {
    fader = document.getElementById("black");
    fader.style.opacity = "0";
    document.getElementById("scroll-up-smaller").style.opacity = "1";
}

var typed = new Typed('.typed', {
    strings: [
        '',
        '<span> </span>Lit^1000',
        '<span> </span>Poetry^500',
        '<span> </span>Stories^500',
        '<span> </span>Non-fiction^500'
    ],
    // stringsElement: '#typed-strings',
    smartBackspace: false,
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    fadeOut: false,
    cursorChar: '|',
});