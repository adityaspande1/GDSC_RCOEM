var tl=gsap.timeline();
tl.from(".multi-color h1,.main-1 h2",{
    y:150,
    opacity:0,
    duration:0.4,
    delay:0.1,
    stagger:0.3
})
tl.from(".main-1 .main-img",{
    y:100,
    opacity:0,
    duration:0.5
})
// gsap.from(".main-1 p,.btn-log",{
//     y:100,
//     opacity:0,
//     duration:0.4,
//     // stagger:0.3,
//     scrollTrigger:{
//         trigger:"main-1 p,btn-log",
//         scroller:"body",
//         markers:true,
//        start:"bottom -90%",
//        end:"bottom -25%",
//         scrub:2
//     }
// })
// gsap.from(".main-1 p,.btn-log",{
//     y:100,
//     opacity:0,
//     duration:0.4,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".main-1 p.btn-log",
//         scroller:"body",
//         // markers:true,
//         start:"bottom 20%",
//         end:"bottom 25%",
//         scrub:2
//     }
// })
gsap.from(".main-1 .btn-h1",{
    y:100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".main- p",
        scroller:"body",
        // markers:true,
        start:"bottom 20%",
        end:"bottom 25%",
        scrub:2
    }
})
// info-container-1 animations
gsap.from(".mission,.heading",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".mission",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }

})
gsap.from(".info-container img",{
    x:-100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".info-container p,.decor-div-1",{
    x:100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
// info container-2 animations
gsap.from(".Our-perspective,.heading-1",{
    y:100,
    opacity:0,
    scrollTrigger:{
            trigger:".Our-perspective,.heading-1",
            scroller:"body",
            // markers:true,
            start:"bottom 70%",
        end:"bottom 50%",
        scrub:2
    }
})

gsap.from(".info-container-2 img",{
    x:100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container-2 img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".info-container-2 p,.decor-div-2",{
    x:-100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container-2 img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
// info-container animation start here
gsap.from(".going,.heading-2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".going,.heading-2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }

})
gsap.from(".info-container-3 img",{
    x:-100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container-3 img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".info-container-3 p,.decor-div-3",{
    x:100,
    opacity:0,
    scrollTrigger:{
            trigger:".info-container-3 img",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})

// data container animations start here
// function for increasing number effect
function load(n) {
    var k = 0;
    var interval = 300; // Delay between increments in milliseconds

    function increment() {
        if (k <= n) {
            document.querySelector(".circular-area h1").innerHTML = k + "+";
            k++;
            setTimeout(increment, interval);
        }
    }

    increment();
}
function load1(n) {
    var k = 0;
    var interval = 120; // Delay between increments in milliseconds

    function increment() {
        if (k <= n) {
            document.querySelector(".circular-area .h-10").innerHTML = k + "+";
            k++;
            setTimeout(increment, interval);
        }
    }

    increment();
}
function load2(n) {
    var k = 0;
    var interval = 2000; // Delay between increments in milliseconds

    function increment() {
        if (k <= n) {
            document.querySelector(".circular-area .h-1k").innerHTML = k +"k"+ "+";
            k++;
            setTimeout(increment, interval);
        }
    }

    increment();
}
function load3(n) {
    var k = 0;
    var interval = 20; // Delay between increments in milliseconds

    function increment() {
        if (k <= n) {
            document.querySelector(".circular-area .h-200").innerHTML = k + "+";
            k++;
            setTimeout(increment, interval);
        }
    }

    increment();
}


gsap.from(".data-container .cards", {
    x: -200,
    opacity: 0,
    delay: 0.5,
    stagger: 0.56,
    scrollTrigger: {
        trigger: ".data-container .cards",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
        onEnter: function () {
            load(3); // Start the load function when the card appears on the screen
            load1(10);
            load2(1);
            load3(200);
        }
    }
})
// Techno div animation starts here
gsap.from(".Techno,.below-techno",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".Techno,.below-techno",
        scroller:"body",
        // markers:true,
       start:"top 80%",
       end:"top 70%",
        scrub:2
    }
})
gsap.from(".cont-1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
       trigger:".cont-1",
       scroller:"body",
    //    markers:true,
       start:"top 80%",
       end:"top 70%",
       scrub:2
    }
})
gsap.from(".cont-2",{
    y:100,
    opacity:0,
    scrollTrigger:{
       trigger:".cont-2",
       scroller:"body",
    //    markers:true,
       start:"top 80%",
       end:"top 75%",
       scrub:2
    }
})
gsap.from(".cont-3",{
    x:100,
    opacity:0,
    scrollTrigger:{
       trigger:".cont-3",
       scroller:"body",
    //    markers:true,
       start:"top 80%",
       end:"top 70%",
       scrub:2
    }
})
// Animations on faq section
// gsap.from(".faq-section h1",{
// // y:100,
// scale:0,
// opacity:0,
// scrollTrigger:{
//     triggerer:".faq-section h1",
//     scroller:"body",
//     markers:true,
//     start:"bottom 600%",
//        end:"bottom 580%",
      
   
// }
// })
gsap.from("question1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"question1",
        scroller:"body",
        // markers:true,
        start:"bottom 20%",
        end:"bottom 10%",
        scrub:2
    }
    
})
// javascript for accordian
$(document).ready(function() {
    // Hide all answers initially
    $(".answer1, .answer2, .answer3, .answer4").hide();
    
    // Handle clicks on questions
    $(".question1, .question2, .question3, .question4").click(function() {
        // Toggle the corresponding answer
        $(this).next(".answer1, .answer2, .answer3, .answer4").slideToggle();
        
        // Close other answers if open
        $(".answer1, .answer2, .answer3, .answer4").not($(this).next()).slideUp();
    });
});





