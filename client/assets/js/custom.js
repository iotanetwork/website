/* ----- Custom Scripts for Pilot template ----- */

jQuery(function($) {
    "use strict";

    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;
    // on scroll,
    $(window).on('scroll', function() {
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
        }
    });

    // Collapse navbar on click

    $(document).on('click.nav', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).removeClass('in').addClass('collapse');
        }
    });

    /* ----- Preloader ----- */

    $(window).load(function() {
        setTimeout(function() {
            $('#loading').fadeOut('slow', function() {});
        }, 300);
    });

    /* --------- Wow Init ------- */

    new WOW().init();

    /* ------- Magnific Popup --------- */

    $('.popup').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    /* -------- Owl Carousel ---------- */

    $(".reviews").owlCarousel({slideSpeed: 200, items: 1, singleItem: true, autoPlay: true, pagination: false});

    /* ------ Clients Section Owl Carousel ----- */

    $(".clients").owlCarousel({slideSpeed: 200, items: 5, singleItem: false, autoPlay: true, pagination: false});

    /* ----------- Scroll To Top --------------- */

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1000) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function() {
        $('#back-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    /* ------ Countdown ----- */

    // $('#countdown').countdown({
    //     date: '12/07/2017 12:00:00',
    //     offset: +2,
    //     day: 'Day',
    //     days: 'Days'
    // }, function () {
    //     console.log('Done!');
    // );

    /* ------ jQuery for Easing min -- */

    $(function() {
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(document).ready(function() {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    });
});

/**
   * This example uses pulsating circles CSS by Kevin Urrutia
   * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
   */

var map = AmCharts.makeChart("chartdiv", {
    "type": "map",
    "theme": "light",
    "projection": "miller",

    "imagesSettings": {
        "rollOverColor": "#089282",
        "rollOverScale": 3,
        "selectedScale": 3,
        "selectedColor": "#089282",
        "color": "#13564e"
    },

    "areasSettings": {
        "unlistedAreasColor": "#15A892"
    },

    "dataProvider": {
        "map": "worldLow",
        "images": [
            {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Aachen",
                "latitude": 50.7753455,
                "longitude": 6.0838868
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Ahmedabad",
                "latitude": 23.022505,
                "longitude": 72.5713621
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Amsterdam",
                "latitude": 52.3702157,
                "longitude": 4.8951679
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Ankara",
                "latitude": 39.9333635,
                "longitude": 32.8597419
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Antwerp",
                "latitude": 51.2194475,
                "longitude": 4.4024643
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Auckland",
                "latitude": -36.8484597,
                "longitude": 174.7633315
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Baden-Württemberg",
                "latitude": 48.6616037,
                "longitude": 9.3501336
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Bangalore",
                "latitude": 12.9715987,
                "longitude": 77.5945627
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Barcelona",
                "latitude": 41.3850639,
                "longitude": 2.1734035
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Beijing",
                "latitude": 39.9041999,
                "longitude": 116.4073963
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Bergamo",
                "latitude": 45.6982642,
                "longitude": 9.6772698
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Berlin",
                "latitude": 52.5200066,
                "longitude": 13.404954
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Boulder",
                "latitude": 40.0149856,
                "longitude": -105.2705456
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Bratislava",
                "latitude": 48.1485965,
                "longitude": 17.1077478
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Brisbane",
                "latitude": -27.4697707,
                "longitude": 153.0251235
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Buenos Aires",
                "latitude": -34.6036844,
                "longitude": -58.3815591
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Calgary",
                "latitude": 51.0486151,
                "longitude": -114.0708459
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Cologne",
                "latitude": 50.937531,
                "longitude": 6.9602786
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Copenhagen",
                "latitude": 55.6760968,
                "longitude": 12.5683372
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Cordoba",
                "latitude": 37.8881751,
                "longitude": -4.7793835
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Geneva",
                "latitude": 46.2043907,
                "longitude": 6.1431577
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Golden",
                "latitude": 39.755543,
                "longitude": -105.2210997
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Graz",
                "latitude": 47.070714,
                "longitude": 15.439504
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Guangzhou",
                "latitude": 23.12911,
                "longitude": 113.264385
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Guildford",
                "latitude": 51.23622,
                "longitude": -0.570409
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Haarlem",
                "latitude": 52.3873878,
                "longitude": 4.6462194
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Herzliya",
                "latitude": 32.162413,
                "longitude": 34.844675
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Hochheim am Main",
                "latitude": 50.0147576,
                "longitude": 8.3558664
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Hong Kong",
                "latitude": 22.396428,
                "longitude": 114.109497
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Irvine",
                "latitude": 33.6845673,
                "longitude": -117.8265049
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Kuala Lumpur",
                "latitude": 3.139003,
                "longitude": 101.686855
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "La Plata",
                "latitude": -34.9204948,
                "longitude": -57.9535657
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Leominster",
                "latitude": 42.5250906,
                "longitude": -71.759794
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Lima",
                "latitude": -12.0463731,
                "longitude": -77.042754
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "London",
                "latitude": 51.5073509,
                "longitude": -0.1277583
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Los Angeles",
                "latitude": 34.0522342,
                "longitude": -118.2436849
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Luxembourg",
                "latitude": 49.815273,
                "longitude": 6.129583
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Madrid",
                "latitude": 40.4167754,
                "longitude": -3.7037902
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Miami",
                "latitude": 25.7616798,
                "longitude": -80.1917902
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Milan",
                "latitude": 45.4642035,
                "longitude": 9.189982
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Montreal",
                "latitude": 45.5016889,
                "longitude": -73.567256
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Munich",
                "latitude": 48.1351253,
                "longitude": 11.5819805
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Nancy",
                "latitude": 48.692054,
                "longitude": 6.184417
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "New Orleans",
                "latitude": 29.9510658,
                "longitude": -90.0715323
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "New York City",
                "latitude": 40.7127753,
                "longitude": -74.0059728
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Nijmegen",
                "latitude": 51.8125626,
                "longitude": 5.8372264
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Papendrecht",
                "latitude": 51.8424811,
                "longitude": 4.6941834
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Paris",
                "latitude": 48.856614,
                "longitude": 2.3522219
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Rio de Janeiro",
                "latitude": -22.9068467,
                "longitude": -43.1728965
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Rome",
                "latitude": 41.9027835,
                "longitude": 12.4963655
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Saint Petersburg",
                "latitude": 59.9342802,
                "longitude": 30.3350986
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "San Francisco",
                "latitude": 37.7749295,
                "longitude": -122.4194155
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "São Paulo",
                "latitude": -23.5505199,
                "longitude": -46.6333094
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Seattle",
                "latitude": 47.6062095,
                "longitude": -122.3320708
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Seoul",
                "latitude": 37.566535,
                "longitude": 126.9779692
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Shenzhen",
                "latitude": 22.543096,
                "longitude": 114.057865
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Singapore",
                "latitude": 1.352083,
                "longitude": 103.819836
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Skien",
                "latitude": 59.1881606,
                "longitude": 9.6127694
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Sofia",
                "latitude": 42.6977082,
                "longitude": 23.3218675
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Stuttgart",
                "latitude": 48.7758459,
                "longitude": 9.1829321
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Taipei",
                "latitude": 25.0329694,
                "longitude": 121.5654177
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Tallinn",
                "latitude": 59.4369608,
                "longitude": 24.7535747
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Tokyo",
                "latitude": 35.6894875,
                "longitude": 139.6917064
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Toronto",
                "latitude": 43.653226,
                "longitude": -79.3831843
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Trondheim",
                "latitude": 63.4305149,
                "longitude": 10.3950528
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Uddebo",
                "latitude": 57.474512,
                "longitude": 13.2616706
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Utrecht",
                "latitude": 52.0907374,
                "longitude": 5.1214201
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Washington D.C.",
                "latitude": 38.9071923,
                "longitude": -77.0368707
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Wilmington",
                "latitude": 39.7390721,
                "longitude": -75.5397878
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Witta",
                "latitude": -26.7141423,
                "longitude": 152.814706
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Yerevan",
                "latitude": 40.1791857,
                "longitude": 44.4991029
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Zurich",
                "latitude": 47.3768866,
                "longitude": 8.541694
            }, {
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Manilla",
                "latitude": 14.5995,
                "longitude": 120.9842
            }
        ]
    }
});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers(event) {
    // get map object
    var map = event.chart;

    // go through all of the images
    for (var x in map.dataProvider.images) {
        // get MapImage object
        var image = map.dataProvider.images[x];

        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
            image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
        image.externalElement.style.top = xy.y + 'px';
        image.externalElement.style.left = xy.x + 'px';
    }
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
    // create holder
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';

    // maybe add a link to it?
    if (undefined != image.url) {
        holder.onclick = function() {
            window.location.href = image.url;
        };
        holder.className += ' map-clickable';
    }

    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);

    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);

    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);

    return holder;
}

$('#teamModal').modal('handleUpdate')

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBNznyn08Hp7R7V679waZ6XNxw30N-jaQk',
        events: {
            googleCalendarId: 'es8ftbmdvt487j6hp6btdti2j8@group.calendar.google.com'
        }
    });
});
