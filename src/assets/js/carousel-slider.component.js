jssor_2_slider_init = function() {
  var jssor_1_SlideoTransitions = [
  ];
  
  var jssor_1_options = {
    $AutoPlay: 1,
    $Idle: 8000,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions,
      $Breaks: [
        [{d:2000,b:1000}]
      ]
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };
  
  var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);
  
  var MAX_WIDTH = 3000;
  
  function ScaleSlider() {  
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;
    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
      jssor_1_slider.$ScaleWidth(expectedWidth);
    }
    else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  
  ScaleSlider();
  
  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
}
setTimeout(function(){
  if (document.getElementById('jssor_2')){
    jssor_2_slider_init();
  }  
}, 1000);
