# Index:

- [JS Runtime](#js-runtime)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [JSON](#json)
- [IIFE](#iife)
- [Labelled iterators](#labelled-iterators)
- [Objects](#objects)
- [Functions](#functions)

## JS Runtime:

### Consist of:

- JS engine
- Web APIs
- Queues:
  - Callback/Task queue
  - Microtask queue
- Event loop

### JS engine:

- Consist of,
  - heap (memory for storing variables)
  - call stack (js code gets executed)

### Web APIs:

- Consist of,
  - DOM
  - Timers (setTimeout, setInterval)
  - Promises
  - Browser storage

### Queues:

- Place where async tasks wait before their execution

### Event loop:

- This thing ensures async tasks are executed in the right order.

> [Go to index](#index)

---

## Asynchronous JavaScript:

- https://www.youtube.com/watch?v=exBgWAIeIeg&t=3308s

> [Go to index](#index)

---

## JSON:

- Everything is enclosed within one main flower brackets{}.
- It always contains key value pairs. Keys are always enclosed within double quotes followed by colon.
- Value could be string, number, boolean, another object, array.

```
{
	"name": "vinay",
	"isAlive": true,
	"nos": [23, 25, 28, 97],
	"address": {
		door: "98/B",
		street: "97th cross",
		city: "Entaartika"
	}
}
```

> [Go to index](#index)

---

## Immediately invoked function expression (IIFE):

- In JS what is wrapped inside a () is treated as an expression.
- Arguments can be passed to the IIFE.

```
	(function something(name) {
		console.log("Hello " + name);
	})("john");
```

> [Go to index](#index)

---

## Labelled iterators:

- A label can be added to the iterators like for, for-in, for-of etc. and that label can be used to continue or break anytime while looping.

```
	let str = "";
	loop1: for (let i = 0; i < 5; i++) {
		if (i === 1) {
			continue loop1;
		}
		str = str + i;
	}
	console.log(str); // output: "0234"
```

> [Go to index](#index)

---

## Objects:

### Computed property names:

- To use a variable's value as the key name in an object, wrap that variable with [<variable_here>]. Usually used while dynamically updating a value in the object.
- Useful while updating/creating an object in a loop.
- Read for more info. -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

```
const [inputData, setInputData] = useState({
  name: "a",
  username: "b",
  email: "c",
});

const handleInputChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setInputData({ ...inputData, [name]: value });
};
```

> [Go to index](#index)

---

## Functions:

### Pure function:

- It does not change any objects or variables that existed before it was called.
- Same inputs, same output. Given the same inputs, a pure function should always return the same result.

```
	function sum(a, b) {
		return a + b;
	}
```

### Functional programming:

- The function and the data must be totally separated. Function should not be dependant on external variables. All requirements should be passed in parameters.
- Functions are treated as first class citizens, i.e., function can be assigned to a variable, passed as an argument and also can be returned from another function.

> [Go to index](#index)

---
