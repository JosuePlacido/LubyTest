function questionOne(count, value) {
	let vector = [];
	if (!count || !value || count < 0) {
		alert("dados inválidos");
		return [];
	}
	for (x = 0; x < count; x++) {
		vector.push(value);
	}
	console.log(vector);
	return vector;
}
function questioTwo(vector) {
	let response = [];
	for (x = vector.length - 1; x >= 0; x--) {
		response.push(vector[x]);
	}
	return response;
}
function questionThree(vector) {
	let response = [];
	for (x = 0; x < vector.length; x++) {
		if (vector[x]) {
			response.push(vector[x]);
		}
	}
	return response;
}
function questionFour(vectors) {
	let response = {};
	for (x = 0; x < vectors.length; x++) {
		if (vectors[x]) {
			response[`${vectors[x][0]}`] = vectors[x][1];
		}
	}
	return response;
}

function questionFive(vector) {
	let args = Array.prototype.slice.call(arguments);
	args = args.slice(1);
	return vector.filter((item) => !args.includes(item));
}

function questionSix(vector) {
	let response = [];
	for (x = 0; x < vector.length; x++) {
		if (!response.includes(vector[x])) {
			response.push(vector[x]);
		}
	}
	return response;
}

function questionSeven(vectorA, vectorB) {
	if (vectorA.length === vectorB.length) {
		for (x = 0; x < vectorA.length; x++) {
			if (vectorA[x] != vectorB[x]) {
				return false;
			}
		}
		return true;
	}
	return false;
}
function questionEight(value) {
	if (Array.isArray(value)) {
		let response = [];
		for (x = 0; x < value.length; x++) {
			if (Array.isArray(value[x])) {
				response.push(...value[x]);
			} else {
				response.push(value[x]);
			}
		}
		return response;
	}
	return value;
}

function questionNine(vector, itemsCount) {
	let response = [];
	for (x = 0; x < vector.length; x += itemsCount) {
		response.push(vector.slice(x, x + itemsCount));
	}
	return response;
}

function questionTen(vectorA, vectorB) {
	let response = [];
	response.push(...vectorA.filter((item) => vectorB.includes(item)));
	response.push(
		...vectorB.filter(
			(item) => vectorA.includes(item) && !response.includes(item)
		)
	);
	return response;
}
