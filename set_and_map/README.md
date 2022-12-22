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
	-	`set1.entries` - returns iterator with [value, value] pair from the set. Absolute waste as of my understanding.

-	Set length can be checked with `set1.size` property
-	Duplicate primitive values cannot be added.
-	Duplicate functions, objects and other non primitive data cannot be added.
-	Multiple non primitive data containing same values can be added. I.e, multiple objects with same data gets added.
-	Set items can be iterated using forEach and for-of.
-	It is of type object.

---

## Map:
