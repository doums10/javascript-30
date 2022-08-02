// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector('.toggle');
const skipButtons = player.getElementsByClassName('skip');
const ranges = player.querySelectorAll('.player__slider');


// Build out functions
function togglePlay(){
	if(video.paused){
		video.play();
	} else {
		video.pause();
	}
}

function updateButton(){
const icon = this.paused ? "►" : "❚ ❚";
toggle.textContent = icon;
}

function skip(dataset){
	video.currentTime += parseFloat(this.dataset.skip);
}
// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click', togglePlay);
Array.from(skipButtons).forEach(button =>
	button.addEventListener("click", skip)
);