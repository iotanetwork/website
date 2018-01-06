/* ----- Custom Scripts for Pilot template ----- */

jQuery(function($) {
  "use strict";

  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;
    // on scroll,
    $(window).on('scroll', function(){
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

  $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });

/*----- Preloader ----- */

  $(window).load(function() {
		setTimeout(function() {
      $('#loading').fadeOut('slow', function() {
      });
    }, 300);
  });

/* --------- Wow Init -------*/

  new WOW().init();

/* ------- Magnific Popup ---------*/

  $('.popup').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

/*-------- Owl Carousel ---------- */

  $(".reviews").owlCarousel({

    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false
  });

/* ------ Clients Section Owl Carousel ----- */

  $(".clients").owlCarousel({
    slideSpeed : 200,
    items: 5,
    singleItem: false,
    autoPlay : true,
    pagination : false
  });


/*----------- Scroll To Top ---------------*/

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function () {
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
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
    });
  });
  });


  /**
   * This example uses pulsating circles CSS by Kevin Urrutia
   * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
   */

  var map = AmCharts.makeChart( "chartdiv", {
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
            "title": "New York",
            "latitude": 40.7128,
            "longitude": -74.0060
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Montrel",
            "latitude": 45.5017,
            "longitude": -73.5673
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Hong Kong",
            "latitude": 22.3964,
            "longitude": 114.1095
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Bangalore",
            "latitude": 12.9716,
            "longitude": 77.5946
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Berlin",
            "latitude": 52.5200,
            "longitude": 13.4050
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Rome",
            "latitude": 41.9028,
            "longitude": 12.4964
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "London",
            "latitude": 51.5002,
            "longitude": -0.1262
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Washington DC",
            "latitude": 38.8921,
            "longitude": -77.0241
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "New Orleans",
            "latitude": 29.9511,
            "longitude": -90.0715
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Brisbane",
            "latitude": -27.4698,
            "longitude": 153.0251
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Haarlem",
            "latitude": 52.3874,
            "longitude": 4.6462
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Beijing",
            "latitude": 39.9042,
            "longitude": 116.4074
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Seoul",
            "latitude": 37.5665,
            "longitude": 126.9780
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Nancy",
            "latitude": 48.6921,
            "longitude": 6.1844
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Amsterdam",
            "latitude": 52.3702,
            "longitude": 4.8952
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Tokyo",
            "latitude": 35.6785,
            "longitude": 139.6823
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Taipei",
            "latitude": 25.0330,
            "longitude": 121.5654
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Zurich",
            "latitude": 47.3769,
            "longitude": 8.5417
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Nijmegen",
            "latitude": 51.8126,
            "longitude": 5.8372
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Ahmedabad",
            "latitude": 23.0225,
            "longitude": 72.5714
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Austin",
            "latitude": 30.2672,
            "longitude": -97.7431
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Los Angeles",
            "latitude": 34.0522,
            "longitude": -118.2437
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Yerevan",
            "latitude": 40.1792,
            "longitude": 44.4991
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "San Francisco",
            "latitude": 37.7749,
            "longitude": -122.4194
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Toronto",
            "latitude": 43.6532,
            "longitude": -79.3832
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Sofia",
            "latitude": 42.6977,
            "longitude": 23.3219
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Barcelona",
            "latitude": 41.3851,
            "longitude": 2.1734
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "São Paulo",
            "latitude": 23.5505,
            "longitude": -46.6333
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Herzlia",
            "latitude": 32.1624,
            "longitude": 34.8447
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Saint Petersburg",
            "latitude": 27.7518,
            "longitude": 82.6267
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Papendrecht",
            "latitude": 51.8425,
            "longitude": 4.6942
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "La Plata",
            "latitude": -34.9205,
            "longitude": 57.9536
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Montreal",
            "latitude": 45.5017,
            "longitude": -73.5673
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Boulder",
            "latitude": 40.0150,
            "longitude": -105.2705
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Bergamo",
            "latitude": 45.6983,
            "longitude": 9.6773
          }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Ankara",
            "latitude": 39.9334,
            "longitude": 32.8597
          }
        ]
    }
  } );

  // add events to recalculate map position when the map is moved or zoomed
  map.addListener( "positionChanged", updateCustomMarkers );

  // this function will take current images on the map and create HTML elements for them
  function updateCustomMarkers( event ) {
    // get map object
    var map = event.chart;

    // go through all of the images
    for ( var x in map.dataProvider.images ) {
      // get MapImage object
      var image = map.dataProvider.images[ x ];

      // check if it has corresponding HTML element
      if ( 'undefined' == typeof image.externalElement )
        image.externalElement = createCustomMarker( image );

      // reposition the element accoridng to coordinates
      var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
      image.externalElement.style.top = xy.y + 'px';
      image.externalElement.style.left = xy.x + 'px';
    }
  }

  // this function creates and returns a new marker element
  function createCustomMarker( image ) {
    // create holder
    var holder = document.createElement( 'div' );
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';

    // maybe add a link to it?
    if ( undefined != image.url ) {
      holder.onclick = function() {
        window.location.href = image.url;
      };
      holder.className += ' map-clickable';
    }

    // create dot
    var dot = document.createElement( 'div' );
    dot.className = 'dot';
    holder.appendChild( dot );

    // create pulse
    var pulse = document.createElement( 'div' );
    pulse.className = 'pulse';
    holder.appendChild( pulse );

    // append the marker to the map container
    image.chart.chartDiv.appendChild( holder );

    return holder;
  }
