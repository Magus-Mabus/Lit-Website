scrollFunction();
fadeOutFader();

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    let mainTitle = document.getElementById("scroll-up-smaller").style;
    let headerTitle = document.getElementById("header-title").style;
    if (document.body.scrollTop / document.body.clientHeight > 50 / 790
        || document.documentElement.scrollTop / document.body.clientHeight > 50 / 790) {
        // mainTitle.padding = "0px 0px";
        // mainTitle.top = "-1%";
        // mainTitle.fontSize = "4vw";
        // // mainTitle.fontSize = "60px";
        // mainTitle.fontWeight = "100";
        headerTitle.opacity = "1";
        mainTitle.opacity = "0";
    } else {
        // mainTitle.padding = "20px 20px";
        // mainTitle.top = "40%";
        // // mainTitle.fontSize = "100px";
        // mainTitle.fontSize = "7vw";
        headerTitle.opacity = "0";
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
        'Lit^1000',
        'Poetry^500',
        'Stories^500',
        'Essays^500'
    ],
    // stringsElement: '#typed-strings',
    smartBackspace: true,
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    fadeOut: false,
    cursorChar: '|',
});