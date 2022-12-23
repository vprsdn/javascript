const setTimeoutLogger = (name = "") => {
	console.log(`Hello ${name}!`);
};

// const timeoutId = setTimeout(setTimeoutLogger, 2000, "Vinay");
// clearTimeout(timeoutId);

// const intervalId = setInterval(setTimeoutLogger, 2000, "Vin");
// clearInterval(intervalId);

//	SET INTERVAL USING SET TIMEOUT
setTimeout(
	function run(name = "") {
		console.log(`Hello ${name}`);
		setTimeout(() => {
			run("Vinay");
		}, 200);
	},
	1000,
	"Vinay"
);
