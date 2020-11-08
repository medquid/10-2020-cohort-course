var currentPosition = 0;
            
var nextImage = function() {
      currentPosition = currentPosition - 360;
      document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'}
           
var prevImage = function() {
      currentPosition = currentPosition + 360;
      document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'}

/* setTimeout(nextImage, 360)     
setTimeout(nextImage, 720)
setTimeout(nextImage, 1080)
setTimeout(nextImage, 1440) */
