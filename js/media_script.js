var overlay = document.getElementById('overlay');
var overlayMedia = document.getElementById('overlay-media')
var imgs = document.getElementsByTagName('img');
var videos = document.getElementsByTagName('video');
var scrollButton = document.getElementById('scroll'); // Only on imgs page

function enableOverlay() {
	overlay.classList.remove('invisible');
}

function exitOverlay() {
	overlay.classList.add('invisible');
}

// Add click listeners to each img to enable the overlay
// Don't include the last img, because that is the overlay img itself
for (var i = 0; i < imgs.length - 1; i++) {
	imgs[i].onclick = function() {
		overlayMedia.src = this.src;
		enableOverlay();
	}
}

// Add click listeners to videos (like above)
for (var i = 0; i < videos.length - 1; i++) {
	videos[i].onclick = function() {
		event.preventDefault();
		overlayMedia.src = this.src;
		overlayMedia.title = this.title;
		overlayMedia.load();
		overlayMedia.play();
		enableOverlay();
	}
}

// Exit overlay when clicking outside media or pressing escape
overlay.onclick = exitOverlay;
document.onkeyup = function(e) {
	if (e.key == 'Escape') {
		exitOverlay();
	}
}

// Don't propogate clicking on the actual media up (so it won't exit overlay)
overlayMedia.onclick = function() {
	event.stopPropagation();
}

if (scrollButton) {
	// Scroll to top
	scrollButton.onclick = function() {
		window.scrollTo(0, 0);
	}
	
	// Enable scroll to top button if scrolled past a quarter of the page
	window.onscroll = function(e) {
		// This scroll ratio isn't quite right
		var scrollRatio = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
		if (scrollRatio >= 0.25) {
			scrollButton.classList.remove('invisible');
		}
		else {
			scrollButton.classList.add('invisible');
		}
	}
}



// classList.toggle
// element.nodeName == "DIV"