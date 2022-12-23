let user = { name: "john", age: "1" };

let arr = [
	["apple", 80],
	["ball", 10],
	[false, "yes"],
	[97, "YES"],
	[007, "bond"],
	[false, "absolute false"],
	[null, "test"],
];

let map1 = new Map(arr);

map1.set(user, "OK OK"); //	Returns the map with new data.
map1.set("apple", 60); //	Updates existing data and returns latest map.

let apple = map1.get("apple");
// console.log("apple", apple);

map1.delete("ball"); //	Returns true if item deleted, else false.

let hasFalse = map1.has(false);
// console.log(hasFalse);

// map1.forEach((value, key, map) => {
// 	console.log(key);
// 	console.log(value);
// 	console.log(map);
// 	console.log("------");
// });

let mapSize = map1.size;
// console.log(mapSize);

let values = map1.values();
for (const value of values) {
	// console.log("value", value);
}

let entries = map1.entries();
for (const entry of entries) {
	// console.log("entry", entry);
}

let keys = map1.keys();
for (const key of keys) {
	// console.log("key", key);
}

map1.clear();

console.log(map1);
