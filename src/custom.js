import $ from 'jquery';

$(document).ready(function () {
  $(window).scroll(function () {
    var getprogress = $('#progress');
    var getprogressvalue = $('#progressvalues');
    var getscrolltop = $(this).scrollTop();
    var getscrollheight = document.documentElement.scrollHeight;
    var getclientheight = document.documentElement.clientHeight;
    var calcheight = getscrollheight - getclientheight;
    var finalheight = Math.round(getscrolltop * 100 / calcheight);
    getprogressvalue.text(finalheight + '%');
    getprogress.css({
      'background': `conic-gradient(greenyellow ${finalheight}%,#eee ${finalheight}%)`
    });
  });
});
