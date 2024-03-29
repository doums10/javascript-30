// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
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

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	console.log(this.value);
	console.log(this.name);
	video[this.name] = this.value;
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime;
console.log(e);
}

function openFullscreen(){
	if(video.requestFullscreen){
		video.requestFullscreen();
}};


// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

Array.from(skipButtons).forEach(button =>
	button.addEventListener("click", skip)
);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);