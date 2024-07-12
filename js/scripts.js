// JavaScript Document
jQuery(document).ready(function($) { 
	
	$('.mainmenu li:has(ul)').addClass('parent'); 
 
    $('a.menulinks').click(function() {
        $(this).next('ul').slideToggle(250);
        $('body').toggleClass('mobile-open'); 
		$('.mainmenu li.parent ul').slideUp(250);
		$('a.child-triggerm').removeClass('child-open');
        return false;
     });	 
	 
	$('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');
	
    $('.mainmenu a.child-triggerm').click(function() {
        $(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('li').find('ul').slideUp(250);
        $(this).next('ul').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });
	//partners jquery
    jQuery('.partners-slider .partners-wrap').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    });
    
    //Awards jquery
    jQuery('.our-trophy-wrap').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //Counter jquery
    if ( $('#counter').length > 0 ) {
      var counted = 0;
      $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {
                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }
              });
          });
          counted = 1;
        }

      });
    }

    //Home Slider
    $(function () {
        var $accordion, $wideScreen;
        $accordion = $('#accordion').children('li');
        $wideScreen = $(window).width() > 767;
        if ($wideScreen) {
            $accordion.on('click', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        } else {
            $accordion.on('touchstart touchend', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        }
    });

    //video play on click
    jQuery(".video-play-icon").click(function () {
        jQuery(".video-wrap").addClass("video-play");
        promo_video.play();
    });
    
    //Tabs JQuery
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    //Jarallax jquery
    if ( $('.jarallax').length > 0 ) {
      jarallax(document.querySelectorAll('.jarallax'), {
          speed: 0.2
      });
    }

    //model hover
    var delay=1000, setTimeoutConst;
    $('.news-item img').on('hover', function() {
      setTimeoutConst = setTimeout(function() {
        // do something
        $(".modal").addClass("show");
        console("hello")
      }, delay);
    }, function() {
      clearTimeout(setTimeoutConst);
    });

    // $(".news-item img").hover(
    //   function () {
    //     $(".modal").addClass("show");
    //   }
    // );


});//document.ready end here

// function triggerModal(){
//   const myModalEl = document.getElementById('newsModal');
//   const modal = new bs.Modal(myModalEl);
//   modal.toggle();
// }