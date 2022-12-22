const axios = require("axios");

const response1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
const response2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const response3 = axios.get("https://jsonplaceholder.typicode.com/todos/1");
const response4 = axios.get("https://jsonplaceholder.typicode.com/posts/1");

const resolvedPromisesArray = [Promise.resolve({ name: "vinay", age: 26 }), Promise.reject(44)];

function fetchCall() {
	// Promise.all([response1.then((res) => res.json()), response2.then((res) => res.json())])
	// 	.then((allResponse) => {
	// 		// console.log(allResponse[0]);
	// 		// console.log(allResponse[1]);
	// 		return allResponse;
	// 	})
	// 	.then((resData) => {
	// 		console.log(resData);
	// 		console.log("+".repeat(50));
	// 	});

	const p = Promise.allSettled(resolvedPromisesArray)
		// const p = Promise.any(resolvedPromisesArray)
		// const p = Promise.all(resolvedPromisesArray)
		.catch((err) => {
			console.log("catch block");
			console.log(err);
		})
		.finally((x) => console.log("finally block", x));
	// Immediately logging the value of p
	console.log(p);

	setTimeout(() => {
		console.log(p);
	});
}

function axiosCall() {
	Promise.all([response3, response4]).then((allResponse) => {
		console.log(allResponse[0].data);
		console.log(allResponse[1].data);
		console.log("-".repeat(50));
	});
}

fetchCall();
// axiosCall();
