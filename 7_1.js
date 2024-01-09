const does_exist = (a, b, c) => {
	return !(a + b <= c || a + c <= b || b + c <= a)
}

console.log(3, 4, 5, does_exist(3, 4, 5));
console.log(3, 4, 15, does_exist(3, 4, 15));
