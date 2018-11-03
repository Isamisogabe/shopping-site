/* global $ */
/* 
var setElm = $("#cover"),
    slideSpeed = 500;

setElm.each(function() {
  var self         = $(this),               // そのもの指定
      selfWidth    = self.innerWidth();     // スライドパネル横幅
      selfUl       = self.find('ui');       // ul要素
      selfLi       = selfUl.find('li');     // すべてのli要素
      listWidth    = selfLi.outerWidth(),   // li要素の横幅
      listCount    = selfLi.length,         // 要素数
      slideWidth   = listWidth * listCount; // listの全横幅を計算
  
  selfUl.css({width: slideWidth});
  
  if(selfWidth < slideWidth) {
    self.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>')
      .find('ul').wrapAll('<div class="slideWrap"/>')
    var btnNext = self.find('.btnNext'),
        btnPrev = self.find('.btnPrev');
    
    btnNext.click(function() {
      selfUl.not(':animated')
        .animate({left:'-='+(listWidth)}, slideSpeed, function() {
          btnSet();
        });
    });
    
    btnNext.click(function() {
      selfUl.not(':animated')
        .animate({left:'+='+(listWidth)}, slideSpeed, function() {
          btnSet();
        });
    });
    
    function btnSet() {
      var ulLeft = parseInt(selfUl.css('left')),
          maskWidth = selfWidth - slideWidth;
      
      if(ulLeft == 0){
        btnNext.css({display: 'block'});
        btnPrev.css({display: 'none'});
      } else if(ulLeft <= maskWidth){
        btnNext.css({display: 'none'});
        btnPrev.css({display: 'block'});
      } else {
        btnNext.css({display: 'block'});
        btnPrev.css({display: 'block'});
      }
    }
    btnSet();
  }
  
});
*/

$(document).ready(function() {
  $("#humburger-btn").click(function() {
    $("#sp-header-toggle").slideToggle();
  });
  
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
    }
    
  );
  
});

$(window).load(function () {
  $(".sub-images img").click(function () {
    var img_src = $(this).attr("src");
    $(".main-image > img").attr("src", img_src);
    // body...
  });
});