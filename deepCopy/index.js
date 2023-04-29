let address = {
	door: 97,
	street: {
		main: 2,
		cross: 8,
	},
	area: "NP",
	city: "TEH",
	country: "US",
};

let fruits = {
	apple: 80,
	mango: 70,
};

let user = {
	name: "john",
	age: 22,
	contact: {
		phone: 987654321,
		address,
		places: ["A", "B", fruits],
	},
};

let userCopy1 = user;
// console.log(userCopy1 === user);	//	TRUE

let userCopy2 = structuredClone(user);
fruits.mango = 120;
console.log(userCopy2.contact.places);	//	NO CHANGE
console.log(user.contact.places);		//	CHANGED TO 120
console.log(userCopy2.contact.places[2] == user.contact.places[2]);

//	ONLY WORKS FOR OBJECTS
function deepCopy(obj = {}) {
	let returnValue = {};
	for (const key in obj) {
		const currentValue = obj[key];
		if (typeof currentValue == "object" && !Array.isArray(currentValue)) {
			returnValue[key] = deepCopy(currentValue);
		} else {
			returnValue[key] = currentValue;
		}
	}
	return returnValue;
}
