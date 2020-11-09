var currentPosition = 0;

var nextImage = function () {
      if (currentPosition > -1440) {
            currentPosition = currentPosition - 360;
            document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'
      }
      console.log(currentPosition)
}

var prevImage = function () {
      if (currentPosition < 0) {
            currentPosition = currentPosition + 360;
            document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'
      }
      console.log(currentPosition)
}

if (currentPosition > -1440) {
      setInterval(nextImage, 5000)
} 

// else if (currentPosition < 0) {
//       setInterval(prevImage, 5000)
// }