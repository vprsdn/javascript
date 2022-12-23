const setTimeoutLogger = (name = "") => {
	console.log(`Hello ${name}!`);
};

// const timeoutId = setTimeout(setTimeoutLogger, 2000, "John");
// clearTimeout(timeoutId);

// const intervalId = setInterval(setTimeoutLogger, 2000, "Vin");
// clearInterval(intervalId);

//	SET INTERVAL USING SET TIMEOUT
setTimeout(
	function run(name = "") {
		console.log(`Hello ${name}`);
		setTimeout(() => {
			run("John");
		}, 1000);
	},
	1000,
	"John"
);
