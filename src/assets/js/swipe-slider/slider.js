function getSwiperHeight(object, attr) {
  var val = object.attr("data-" + attr),
    dim;

  if (!val) {
    return undefined;
  }

  dim = val.match(/(px)|(%)|(vh)$/i);

  if (dim.length) {
    switch (dim[0]) {
      case "px":
        return parseFloat(val);
      case "vh":
        return jQuery(window).height() * (parseFloat(val) / 100);
      case "%":
        return object.width() * (parseFloat(val) / 100);
    }
  } else {
    return undefined;
  }
}

function toggleSwiperInnerVideos(swiper) {
  var prevSlide = jQuery(swiper.slides[swiper.previousIndex]),
    nextSlide = jQuery(swiper.slides[swiper.activeIndex]),
    videos;

  prevSlide.find("video").each(function () {
    this.pause();
  });

  videos = nextSlide.find("video");
  if (videos.length) {
    videos.get(0).play();
  }
}

function toggleSwiperCaptionAnimation(swiper) {
  var prevSlide = jQuery(swiper.container),
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

function makeParallax(el, speed, wrapper, prevScroll) {
  var scrollY = window.scrollY || window.pageYOffset;

  if (prevScroll != scrollY) {
    prevScroll = scrollY;
    el.addClass('no-transition');
    el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
    el.height();
    el.removeClass('no-transition');

    if (el.attr('data-fade') === 'true') {
      var bound = el[0].getBoundingClientRect(),
        offsetTop = bound.top * 2 + scrollY,
        sceneHeight = wrapper.outerHeight(),
        sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
        layerDevider = offsetTop + el.outerHeight() / 2.0,
        pos = sceneHeight / 6.0,
        opacity;
      if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
        el[0].style["opacity"] = 1;
      } else {
        if (sceneDevider - pos < layerDevider) {
          opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
        } else {
          opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
        }
        el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
      }
    }
  }

  requestAnimationFrame(function () {
    makeParallax(el, speed, wrapper, prevScroll);
  });
}

var isNoviBuilder = window.xMode;
var init_slider = function () {
  var s = jQuery(".swiper-slider");  
  if (s.length) {
    
    var pag = s.find(".swiper-pagination"),
      next = s.find(".swiper-button-next"),
      prev = s.find(".swiper-button-prev"),
      bar = s.find(".swiper-scrollbar"),
      parallax = s.parents('.rd-parallax').length,
      swiperSlide = s.find(".swiper-slide");
    for (j = 0; j < swiperSlide.length; j++) {
      var $this = jQuery(swiperSlide[j]),
        url;

      if (url = $this.attr("data-slide-bg")) {
        $this.css({
          "background-image": "url(" + url + ")",
          "background-size": "cover"
        })
      }
    }

    swiperSlide.end()
      .find("[data-caption-animate]")
      .addClass("not-animated")
      .end()
      .swiper({
        autoplay: s.attr('data-autoplay') !== "false" && !isNoviBuilder ? s.attr('data-autoplay')  : null,
        direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
        effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
        speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
        keyboardControl: s.attr('data-keyboard') === "true",
        mousewheelControl: s.attr('data-mousewheel') === "true",
        mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
        nextButton: next.length ? next.get(0) : null,
        prevButton: prev.length ? prev.get(0) : null,
        pagination: pag.length ? pag.get(0) : null,
        paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
        paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        } : null : null,
        scrollbar: bar.length ? bar.get(0) : null,
        scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
        scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
        loop: s.attr("data-loop") && !isNoviBuilder ? s.attr('data-loop') !== "false" : false,
        simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
        onTransitionStart: function (swiper) {
          toggleSwiperInnerVideos(swiper);
        },
        onTransitionEnd: function (swiper) {
          toggleSwiperCaptionAnimation(swiper);
        },
        onInit: function (swiper) {
          toggleSwiperInnerVideos(swiper);
          toggleSwiperCaptionAnimation(swiper);

          var swiperParalax = s.find(".swiper-parallax");

          for (var k = 0; k < swiperParalax.length; k++) {
            var $this = jQuery(swiperParalax[k]),
              speed;

            if (parallax && !isIEBrows && !isMobile) {
              if (speed = $this.attr("data-speed")) {
                makeParallax($this, speed, s, false);
              }
            }
          }
          jQuery(window).on('resize', function () {
            swiper.update(true);
          })
        }
      });

    jQuery(window)
      .on("resize", function () {
        var mh = getSwiperHeight(s, "min-height"),
          h = getSwiperHeight(s, "height");
        if (h) {
          s.css("height", mh ? mh > h ? mh : h : h);
        }
      })
      .trigger("resize");
  }
}
setTimeout(init_slider, 1000);