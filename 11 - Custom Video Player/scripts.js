// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('player__slider');


// Build out functions
function togglePlay(){
	if(video.paused){
		video.play();
	} else {
		video.pause();
	}
}

function updateButton(){
console.log('update button');
const icon = this.paused ? "►" : "❚ ❚";
toggle.textContent = icon;
}
// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click', togglePlay);