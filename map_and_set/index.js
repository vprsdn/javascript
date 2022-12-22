let arr1 = ["apple", "ball", "car", "dog", "ear", "dog"];

let set1 = new Set(arr1);

// set1.forEach((element) => {
// 	console.log(element);
// });

// for (const x of set1) {
// 	console.log(x);
// }

let hasApple = set1.has("apple");
// console.log("hasApple ->", hasApple);

let x = set1.add("grapes");	//	Returns a new Set with added item. set1 is also modified.
// console.log(x);
// console.log(set1);

set1.add({ name: "john1" });
set1.add({ name: "john1" });	//	Multiple objects with same data gets added to set.
// console.log(set1);

set1.delete("grapes");	//	Returns true if item is removed, else false.

set1.add(false);
set1.add(true);
// console.log(set1.size);

let values = set1.values();
// for (const value of values) {
// 	console.log("value", value);
// }

let entries = set1.entries();
// for (const entry of entries) {
// 	console.log("entry", entry);
// }

let keys = set1.keys();
// for (const key of keys) {
// 	console.log("key", key);
// }

// console.log(typeof set1);	//	Object
// console.log(set1 instanceof Set);	//	true
// console.log(set1 instanceof Object);	//	true


set1.clear(); //	Does not return anything.
console.log(set1);
