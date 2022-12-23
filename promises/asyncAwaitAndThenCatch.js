const { getUser } = require("./api.js");

const getUserDataThenCatch = () => {
	getUser()
		.then(
			(res) => {
				console.log("res", res);
			}
			// ,(err) => {
			// 	console.log("then err", err);
			// }
		)
		.catch((error) => {
			console.log("catch err", error);
		});
};

const getUserDataAsyncAwait = async () => {
	try {
		const response = await getUser();
		console.log("res", response);
	} catch (error) {
		console.log("err", error);
	}
};

// getUserDataThenCatch();
getUserDataAsyncAwait();
