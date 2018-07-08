// Two tortoises named A and B must run a race.
// A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour.
// How long will it take B to catch A?

// way1
function race1(v1, v2, g) {
	if (v1 >= v2) {
		return null;
	}

	const ds = (g / (v2 - v1)) * 3600;

	const h = Math.floor(ds / 3600);
	const m = Math.floor((ds % 3600) / 60);
	const s = Math.floor((ds % 3600) % 60);

	return [h, m, s];
}

//way2
function race2(v1, v2, g) {
	let time = g / (v2 - v1);
	return v2 > v1
		? [
				Math.floor(time),
				Math.floor((time * 60) % 60),
				Math.floor((time * 3600) % 60),
		  ]
		: null;
}

console.log(race1(80,91,37))

console.log(race2(80,91,37))