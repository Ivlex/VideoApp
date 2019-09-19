var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Video',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
});
var mainView = app.views.create('.view-main');

var ip = 'http://192.168.3.151:18581/';
var pwd = 'Yum8p3SRdN295k2';/*1017882C7824WIP*/

var ppContent;


function OnPtzMouseUp()
{
var url;
url=ip+'decoder_control.cgi?';
url+='&loginuse='+'admin'/*loginuser*/+'&loginpas='+/*encodeURIComponent(loginpass)*/pwd;
url+='&command=0&onestep=1';
url+='&' + new Date().getTime() + Math.random();
$.getScript(url);
}

function OnPtzMouseLeft()
{
var url;
url=ip+'decoder_control.cgi?';
url+='&loginuse='+'admin'/*loginuser*/+'&loginpas='+/*encodeURIComponent(loginpass)*/pwd;
url+='&command=4&onestep=1';
url+='&' + new Date().getTime() + Math.random();
$.getScript(url);
}

function OnPtzMouseRight()
{
var url;
url=ip+'decoder_control.cgi?';
url+='&loginuse='+'admin'/*loginuser*/+'&loginpas='+/*encodeURIComponent(loginpass)*/pwd;
url+='&command=6&onestep=1';
url+='&' + new Date().getTime() + Math.random();
$.getScript(url);
}

function OnPtzMouseDown()
{
var url;
url=ip+'decoder_control.cgi?';
url+='&loginuse='+'admin'/*loginuser*/+'&loginpas='+/*encodeURIComponent(loginpass)*/pwd;
url+='&command=2&onestep=1';
url+='&' + new Date().getTime() + Math.random();
$.getScript(url);
}

/*
function OnPtzMouseStop()
{
var url;
url='decoder_control.cgi?';
url+='&loginuse='+loginuser+'&loginpas='+encodeURIComponent(loginpass);
url+='&command=1';
url+='&' + new Date().getTime() + Math.random();
$.getScript(url);
}*/

function newPopUp()
{
  var a = document.getElementsByClassName('swiper-slide-active');
  ip = a[0].firstChild.currentSrc.substring(0,a[0].firstChild.currentSrc.indexOf('snapshot'));

  // Create dynamic Popup
  var dynamicPopup = app.popup.create({
    content: '<div class="popup">' +
                '<div class="block">'+
                  '<img style="-webkit-user-select: none;" src="'+ ip +'videostream.cgi?user=admin&amp;pwd=' + pwd +'" width="640" height="360">'+
                  '<button class="col button button-fill color-blue" style="width:360px" onclick="OnPtzMouseUp()">Up</button>' +
                  '<button class="col button button-fill color-blue" style="width:360px" onclick="OnPtzMouseLeft()">Left</button>' +
                  '<button class="col button button-fill color-blue" style="width:360px" onclick="OnPtzMouseRight()">Right</button>' +
                  '<button class="col button button-fill color-blue" style="width:360px" onclick="OnPtzMouseDown()">Down</button>' +
                  '<p><a href="#" class="link popup-close">Close me</a></p>'+
                '</div>'+
              '</div>',
    // Events
    on: {
      open: function (popup) {
        console.log('Popup open');
      },
      opened: function (popup) {
        console.log('Popup opened');
      },
      close: function (popup) {
        console.log('Popup close');
        dynamicPopup.destroy();
      }
    }
  });

  dynamicPopup.open();
}

var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerColumn: 1,
    centeredSlides: true
});

swiper.removeAllSlides();
swiper.addSlide(0,'<div class="swiper-slide"><img src="http://192.168.3.151:18581/snapshot.cgi?res=0&user=admin&pwd=Yum8p3SRdN295k2"/></div>');
swiper.addSlide(1,'<div class="swiper-slide"><img src="http://192.168.3.147:55845/snapshot.cgi?res=0&user=admin&pwd=Yum8p3SRdN295k2"/></div>');
swiper.update();