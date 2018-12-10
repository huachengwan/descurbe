function toggleSwiperCaptionAnimation(swiper) {
  var isNoviBuilder = window.xMode;
  var prevSlide = jQuery(swiper.wrapperEl),
    nextSlide = jQuery(swiper.slides[swiper.activeIndex]);

  prevSlide
    .find("[data-caption-animate]")
    .each(function () {
      var $this = jQuery(this);
      $this
        .removeClass("animated")
        .removeClass($this.attr("data-caption-animate"))
        .addClass("not-animated");
    });


  nextSlide
    .find("[data-caption-animate]")
    .each(function () {
      var $this = jQuery(this),
        delay = $this.attr("data-caption-delay");

      if (!isNoviBuilder) {
        setTimeout(function () {
          $this
            .removeClass("not-animated")
            .addClass($this.attr("data-caption-animate"))
            .addClass("animated");
        }, delay ? parseInt(delay) : 0);
      }else{
        $this
          .removeClass("not-animated")
      }
    });
}

var init_slider = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: true,
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function() {
        jQuery(this.wrapperEl).find('.swiper-slide').each(function(){
          if (url = jQuery(this).attr("data-slide-bg")) {
            jQuery(this).css({
              "background-image": "url(" + url + ")"
            })
          }
        })
        toggleSwiperCaptionAnimation(this);
      },
      transitionEnd: function () {
        toggleSwiperCaptionAnimation(this);
      }
    }
    /*
    onInit: function(swiper) {
      
    },
    onTransitionEnd: function (swiper) {
      toggleSwiperCaptionAnimation(swiper);
    }
    */
  })
};

module.exports = function(){
  setTimeout(init_slider, 1000);
}

