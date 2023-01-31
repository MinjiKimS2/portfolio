const frame = document.querySelector('section');
const lists = frame.querySelectorAll('article');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
const audio = document.querySelectorAll('audio');

let i = 0;
let num = 0;
const deg = 45;
let active = 0;
const len = lists.length - 1;

for (let el of lists) {
	el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

	let pic = el.querySelector('.pic');
	pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
	i++;

	const play = el.querySelector('.play');
	const pause = el.querySelector('.pause');
	const load = el.querySelector('.load');

	play.addEventListener('click', (e) => {
		let isActive = e.currentTarget.closest('article').classList.contains('on');

		if (isActive) {
			e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
			el.querySelector('audio').play();
		}
	});

	pause.addEventListener('click', (e) => {
		let isActive = e.currentTarget.closest('article').classList.contains('on');

		if (isActive) {
			e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
			el.querySelector('audio').pause();
		}
	});

	load.addEventListener('click', (e) => {
		let isActive = e.currentTarget.closest('article').classList.contains('on');
		if (isActive) {
			e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
			el.querySelector('audio').load();
		}
	});
}

prev.addEventListener('click', () => {
	initMusic();

	num++;
	frame.style.transform = `rotate(${num * deg}deg)`;

	if (active == 0) {
		active = len;
	} else {
		active--;
	}

	activation(lists, active);
});

next.addEventListener('click', () => {
	initMusic();

	num--;
	frame.style.transform = `rotate(${num * deg}deg)`;

	if (active == len) {
		active = 0;
	} else {
		active++;
	}

	activation(lists, active);
});

function activation(arr, index) {
	for (let el of arr) el.classList.remove('on');
	arr[index].classList.add('on');
}

function initMusic() {
	for (let el of audio) {
		el.pause();
		el.load();
		el.closest('article').querySelector('.pic').classList.remove('on');
	}
}
