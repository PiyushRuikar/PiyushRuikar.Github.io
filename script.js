$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Analyst", "Coder", "Problem Solver", "Data Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,   //for carousel effect turn it true
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});

let res = document.getElementById("portfolioDownload")
res.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1_0Nt-0JWVXjFWwldKZj6zLxdOKeTsECS/view?usp=drive_link")
})

let res2 = document.getElementById("portfolioDownload2")
res2.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1_0Nt-0JWVXjFWwldKZj6zLxdOKeTsECS/view?usp=drive_link")
})


GitHubCalendar(".calendar", "piyushruikar");
// or enable responsive functionality
GitHubCalendar(".calendar", "piyushruikar", { responsive: true });