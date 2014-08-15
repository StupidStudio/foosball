(function ($, TweenMax) {

	$(document).ready(function () {

		window.addEventListener('shake', shakeEventDidOccur, false);

		var $player = $('.player'),
			$playerBorder = $('.player .border'),
			$playerImage = $('.player .image'),
			$line = $('.line'),
			$circle = $('.circle'),
			$goal = $('.goal'),
			$header = $('.header'),
			$footer = $('.footer'),
			count = [1, 2, 3, 4];


		var t1 = new TimelineMax();

		t1.staggerFrom($circle, 1, {
			scale: 0,
			y: 25,
			ease: Power3.easeInOut
		}, 0.25);


		t1.staggerFrom($line, 0.5, {
			width: 0,
			opacity: 0,
			ease: Power3.easeInOut
		}, 0.25, "-=0.5");


		t1.staggerFrom($goal, 1, {
			x: -100,
			width: 0,
			ease: Power3.easeInOut
		}, 0.25, "-=0.5");


		t1.staggerFrom($playerBorder, 1, {
			css: {
				"left": "50px",
				borderWidth: "50px",
				borderColor: "#fff",
			},
			ease: Power3.easeInOut
		}, 0.15, "-=0.75");

		t1.staggerFrom($playerImage, 0.5, {
			opacity: 0,
			ease: Power3.easeInOut
		}, 0.15, "-=1.1");


		t1.add(
			TweenMax.from($header, 1, {
				opacity: 0,
				top: "40px",
				ease: Power3.easeInOut
			}), "-=1"
		);

		t1.add(
			TweenMax.from($footer, 1, {
				opacity: 0,
				bottom: "40px",
				ease: Power3.easeInOut
			}), "-=0.75"
		);

		
		
		var t2 = new TimelineMax();
		
		t2.pause();
		
		t2.staggerTo($playerImage, 0.15, {
			opacity: 0,
			ease: Power3.easeInOut,
			delay:0.25,
		}, 0.15);
		
		t2.staggerTo($playerBorder, 0.5, {
			css: {
				"left": "50px",
				borderWidth: "50px",
			},
			ease: Power3.easeInOut,
			onComplete:function(){
				newNumbers();
			}
		}, 0.15, "-=0.75");
		
		t2.staggerTo($playerBorder, 1, {
			css: {
				"left": "0px",
				borderWidth: "3px",
			},
			ease: Power3.easeInOut
		}, 0.15, "-=0.25");

		t2.staggerTo($playerImage, 0.5, {
			opacity: 1,
			ease: Power3.easeInOut
		}, 0.15, "-=1");


		function shakeEventDidOccur() {
			if(t1.isActive()) return;
			
			t2.restart();
		}
		
		function newNumbers(){
			count.sort(function () {
				return Math.random() < 0.5 ? 1 : -1;
			});
			
			$playerImage.each(function(i,el){
				$(el).html(count[i]);
			})
		}

		window.shakeEventDidOccur = shakeEventDidOccur;
	});

}(jQuery, TweenMax))