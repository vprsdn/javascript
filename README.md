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
  - memory heap - memory for storing variable and function declarations.
  - call stack - when code is executed, functions are pushed to the callstack and is popped once the function returns. LIFO.

### Web/Browser APIs:

- Consist of,
  - DOM
  - Timers (setTimeout, setInterval)
  - Promises
  - XHR Requests
  - Browser storage

### Queues:

- Place where async tasks wait before their execution
- Consist of,
  - Callback/Task queue (for timers)
  - Microtask queue (for promises)

### Event loop:

- Constantly checks callstack, checks callback queue, push if callstack is empty.
- This ensures async tasks are executed in the right order.

> [Go to index](#index)

---

## Asynchronous JavaScript:

- Execution starts with global scope, so `global()` gets pushed to the callstack first and gets removed last.

### Set Timeout flow:

- Whenever the callstack encounters a setTimeout, the callback function and the timer is sent to the web API and setTimeout is removed from the callstack. Controls continues with the next lines of code.
- The web API starts the timer for given time in the background.
- Once the timer is up, the callback function gets sent to the callback queue.
- Now the event loop checks callstack, checks callback queue, push the function from callback queue to the callstack if callstack is empty.

### Promise flow:

- Whenever the callstack encounters a promise, the fetch function and the url is sent to the web API.
- This would create a promise object in the memory heap. This contains the promise value and onFulfilment and onRejected placeholders.
- .then and .catch lines would send the callback functions to the placeholders created in previous step.
- Once fetch returns the value, the promise value is set in the promise object. Now the callback functions and the value is sent to the microtask queue.
- Now the event loop checks callstack, checks microtask queue, push the function from microtask queue to the callstack if callstack is empty.

### Note:

- If both the queues, callback queue and microtask queue contains functions to execute, JS/event loop prioritizes the microtask queue and pushes that function to the callstack.

### Reference:

- [Youtube - Codevolution](https://www.youtube.com/watch?v=exBgWAIeIeg)

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
