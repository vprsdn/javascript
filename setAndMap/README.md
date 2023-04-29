## Set:

-	Syntax:
```
let set1 = new Set([...]);
```
-	Methods:
	-	`set1.add` to add a new item to the set.
	-	`set1.has` to check if the set contains a certain value.
	-	`set1.delete` to delete an item from the set.
	-	`set1.clear` to clear all the items from the set.
	-	`set1.values` - returns iterator with all the items in the set.
	-	`set1.keys` - returns iterator with all the items in the set.
	-	`set1.entries` - returns iterator with [value, value] pairs from the set. Absolute waste as of my understanding.

-	Set's length can be checked with `set1.size` property
-	Duplicate primitive values cannot be added.
-	Duplicate functions, objects and other non primitive data cannot be added.
-	Multiple non primitive data containing same values can be added. I.e, multiple objects with same data gets added.
-	Set items can be iterated using forEach and for-of.
-	It is of type object.
-	instanceof set1 is Set/Object.

---

## Map:

-	Syntax:
```
let map1 = new Map([[key, value], ...]);
```
-	Methods:
	-	`map1.set` to add a new pair of [key, value] to the map.
	-	`map1.get` to get the value by passing a key. Returns undefined, if not found.
	-	`map1.has` to check if the map contains a certain value.
	-	`map1.delete` to delete an item from the map.
	-	`map1.clear` to clear all the items from the map.
	-	`map1.values` - returns iterator with all the values in the map.
	-	`map1.keys` - returns iterator with all the keys in the map.
	-	`map1.entries` - returns iterator with [key, value] pairs from the map.

-	Map's length can be checked with `map1.size` property
-	Duplicate primitive values cannot be added.
-	Duplicate functions, objects and other non primitive data cannot be added.
-	Multiple non primitive data containing same values can be added. I.e, multiple objects with same data gets added.
-	Map items can be iterated using forEach and for-of.
-	It is of type object.
-	instanceof map1 is Map/Object.