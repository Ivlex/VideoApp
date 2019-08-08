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

var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});

// Create dynamic Popup
var dynamicPopup = app.popup.create({
  content: '<div class="popup">'+
              '<div class="block">'+
                '<p>Popup created dynamically.</p>'+
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
  	}
  }
});