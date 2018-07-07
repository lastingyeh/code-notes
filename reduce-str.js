// reduce applied
// way 1
function strReduce(str, size) {
	return Array.prototype.reduce.call(
		str,
		(prev, curr, index) => {
			if (index % 2 === 0) {
				let s = str.slice(index, index + size);

				if (s.length === 1) {
					s += '_';
				}

				prev.push(s);
			}
			return prev;
		},
		[],
	);
}

// way2 
function strMatch(str, size) {
	return (str.length % 2 === 1 ? str + '_' : str).match(/../g);
}

console.log(strReduce('abcde', 2));
console.log(strMatch('abcde', 2));
