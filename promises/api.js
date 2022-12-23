const getUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.floor(Math.random() * 10) % 2 === 0) {
				resolve({
					name: "evener",
					sign: 2,
				});
				console.log("resolved");
			} else {
				reject({
					name: "odder",
					sign: 1,
				});
				console.log("rejected");
			}
		}, 3000);
	});
};

module.exports = { getUser };
