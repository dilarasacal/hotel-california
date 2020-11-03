/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



//Leaflet Map Start

var map = L.map('map').setView([41.018762, 29.009292], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Leaflet Map End

//Form Start

document.getElementById('formSubmit').onclick = function(){
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var number = document.getElementById('number').value;
    var eDate = moment(document.getElementById('eDate').value).format('DD/MM/YYYY');
    var oDate = moment(document.getElementById('oDate').value).format('DD/MM/YYYY');
    const today = moment().format('DD/MM/YY')

    if(name.length == 0) {
        swal('Ad Soyad alanı boş olamaz')
        return
    }
    if(mail.length == 0) {
        swal('E-mail alanı boş olamaz')
        return
    }
    if(number.length == 0) {
        swal('Numara alanı boş olamaz')
        return
    }
    if(eDate.length == 0) {
        swal('Giriş Tarihi alanı boş olamaz')
        return
    }
    if(oDate.length == 0) {
        swal('Çıkış Tarihi alanı boş olamaz')
        return
    }

    if (oDate == "Invalid date" || eDate == "Invalid date"){
        swal('Tarih Formatı Geçersiz')
        return
    }

    if(moment(eDate).isAfter(moment(oDate))) {
        swal('Çıkış tarihi giriş tarihinden önce olamaz!')
        return
    }

    if(moment(today).isAfter(moment(eDate))){
        swal('Giriş tarihi bugünden ileri olmalıdır!')
        return
    }

    swal("Kaydınız Alınmıştır!", "Kaydınız Alınmıştır. Teşekkür ederiz ;)", "success");
}

//Form End