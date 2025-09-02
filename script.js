const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower ( ) { 
    window.addEventListener("mousemove", function (details) { 
        document.querySelector("#minicircle").style.transform = "translate(${dets.clientX}px, ${dets.clientY}px)"
    })
}

function firstPageAnime() { 
    var tl= gsap.timeline();

    tl.from ("#nav", {
        y: '-10',
        opacity:0,
        duration:2,
        ease: Expo 
    })

    .to(".boundingelem" , {
        y:0,
        delay:-1.5,
        ease: Expo.easeInOut,
        duration:2,
        stagger:.2,
    })

    .from ("#footlinks" , {
        y:-10,
        delay:-.5,
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
}

document.querySelectorAll (".elem") 
.forEach(function (elem) { 
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener ("mouseleave" , function (details) {
        gsap.to(elem.querySelector("img"), {
            opacity:0,
            ease: Power3,
        });
    });

    elem.addEventListener ("mousemove" , function (details) {
        var diff= details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20 ,20 , diffrot),
        });
    });
});



circleMouseFollower();
firstPageAnime();
