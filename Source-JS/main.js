// Slider content
var sliderContent = document.getElementById('slider-ct');
setTimeout(() => {
	sliderContent.style.transform = "translateX(70px)";
	sliderContent.style.opacity = "1";
}, 1000);
// End Slider content

// Slideshow
var counter = 1, start = 0;
setInterval(() => {
	let radio = document.getElementById('radio' + counter);
	radio.checked = true;
	counter++;
	if(counter > 3) {
		counter = 1;
	}
	setTimeout(() => {
		sliderContent.style.transform = "translateX(70px)";
		sliderContent.style.opacity = "1";
	}, 1500);
	if(start) sliderContent.style.opacity = "0";
	start = 1;
}, 9000);
// End slideshow
