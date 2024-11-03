# Loops

## for

- Skipping an iteration: "continue" statement. [ 1, 3, 5, 7, 9 ]
- Breaking out of the loop: "break" statement. [ 1 ]
- "return" statement exits the entire function. Anything after this line in the function will not be executed irrespective of the iteration. [ 1 ]

```
const finalArr = [];
function something() {
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i]
    if (temp % 2 === 0) {
      continue;
			break;
			return 'something';
    }
    finalArr.push(temp);
  }
  console.log("this won't be logged with return statement");
}
something();
console.log(finalArr);
```

---

## while and do-while

- Skipping an iteration: "continue" statement. [ 1, 3, 5, 7, 9 ]
- Breaking out of the loop: "break" statement. [ 1 ]
- "return" statement exits the entire function. Anything after this line in the function will not be executed irrespective of the iteration. [ 1 ]

```
const finalArr = [];
function something() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let i = 0;

  while (i < arr.length) {
    const temp = arr[i]
    if (temp % 2 === 0) {
      i++
			continue;
			break;
			return 'something';
    }
    finalArr.push(temp);
    i++;
  }
  console.log("this won't be logged with return statement");
}
something();
console.log(finalArr);
```

---

## for-of

- Skipping an iteration: "continue" statement. [ 1, 3, 5, 7, 9 ]
- Breaking out of the loop: "break" statement. [ 1 ]
- "return" statement exits the entire function. Anything after this line in the function will not be executed irrespective of the iteration. [ 1 ]

```
const finalArr = [];
function something() {
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const i of arr) {
    if (i % 2 === 0) {
      continue;
			break;
			return 'something';
    }
    finalArr.push(i);
  }
	console.log("this won't be logged with return statement");
}
something();
console.log(finalArr);
```

---

## for-in

- Skipping an iteration: "continue" statement. [ 1, 3, 5, 7, 9 ]
- Breaking out of the loop: "break" statement. [ 1 ]
- "return" statement exits the entire function. Anything after this line in the function will not be executed irrespective of the iteration. [ 1 ]

```
const finalArr = [];
function something() {
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const key in arr) {
    const i = arr[key]
    if (i % 2 === 0) {
      continue;
			break;
			return 'something';
    }
    finalArr.push(i);
  }
}

something();
console.log(finalArr);  //  [ 1, 3, 5, 7, 9 ]
```

---

## forEach

- Skipping an iteration: Any kind of "return" statement will skip the iteration. [ 1, 3, 5, 7, 9 ]
- Breaking out of the loop: Cannot break out of the loop

```
const finalArr = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((i) => {
  if (i % 2 === 0) {
		return '';
  }
  finalArr.push(i);
});

console.log(finalArr);
```

---

## map

- Can't really skip an iteration in the map, but you can return a dummy item like null or undefined and filter out the resulting array.

```
const finalArr = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map((i) => {
  if (i % 2 === 0) {
		return null;
  }
  return i
}).filter(i =>i !== null);

console.log(newArr);
```

---

## every

- The callback function needs to return truthy or falsy values.
- Loops through all the items until a falsy value is returned.
- The loop itself returns true or false based on whether every item met a condition or not.
- No return statement means return undefined which is falsy.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isAllOdd = arr.every(i=> {
  if(i % 2 === 0) {
    return 0;
  }
  return 'truthy value'
})
console.log(isAllOdd);	//	false
```

## some

- The callback function needs to return truthy or falsy values.
- Loops through all the items until a truthy value is returned.
- The loop itself returns true or false based on whether every item met a condition or not.
- No return statement means return undefined which is falsy.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isAnyMoreThan3 = arr.some(i => {
  if(i > 3) {
    return true;
  }
  console.log(i);
  return false;
});

console.log(isAnyMoreThan3);	//	true
```

---

## filter

- The callback function needs to return truthy or falsy values.
- Loops through all the elements.
- Returns an element to the new array if the callback function returns a truthy value.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddItems = arr.filter(i => {
  if(i % 2 === 0) {
    return false;
  }
  return true
})

console.log(oddItems);
```

---

## keys, values, entries

- These return an iteratable that can be iterated through a for-of loop.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const x = arr.values();
const y = arr.entries();
const z = arr.keys();

for (let i of x) {
  console.log(i);
}

console.log('---');

for (let i of z) {
  console.log(i);
}

console.log('---');

for (let [key, value] of y) {
  console.log(key, 'contains ->', value);
}
```

## reduce, reduceRight

- "reduce" iterates through the items (left to right) and returns the accumulated value after full iteration.
- "reduceRight" iterates through the items (right to left) and returns the accumulated value after full iteration.

```
const numbers = [2, 45, 30, 100];

const x = numbers.reduceRight((total, n) => {
  return total + n;
}, 10000);

const y = numbers.reduce((total, n) => {
  return total + n;
}, 10000)

console.log(x, y);	//	10177 10177
```

---

---

# Promises

## for

- This waits in each iteration for each promise to await.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  const n = arr[i];
  console.log("here 1", n);
  const res = await axios.get(`https://xkcd.com/${n}/info.0.json`);
  console.log("here 2", n, res.data.title);
}
```

## while

- This waits in each iteration for each promise to await.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 0;

while (arr[x] !== undefined) {
  const n = arr[x];
  console.log("here 1", n);
  const res = await axios.get(`https://xkcd.com/${n}/info.0.json`);
  console.log("here 2", n, res.data.title);
  x++;
}
```

## forEach

- Does not await inside the loop.
- Any await even if used will not resolve in the same order as the elements in the array.
- Best way to use is to push the promises into an array and doing a Promise.all(promisesArray) after the forEach loop.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const comicPromises = [];

arr.forEach(async (n) => {
  console.log("here 1", n);
  comicPromises.push(axios.get(`https://xkcd.com/${n}/info.0.json`));
  // const res = await axios.get(`https://xkcd.com/${n}/info.0.json`);	//	This will not be resolved in the same order as the elements in the array.
  // console.log("here 2", n, res.data.title);
  console.log("here 2", n);
});
const comicData = (await Promise.all(comicPromises)).map((res) => res.data);
```

## map

- Iterates through all the items and return the promises to resolve.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const promises1 = arr.map((n) => {
  return axios.get(`https://xkcd.com/${n}/info.0.json`);	//	Does not wait if it is awaited here.
});
const x = (await Promise.all(promises1)).map((res) => res.data.title);
console.log(x);
```

- Any awaits inside the map item will be executed in that order. Nothing needs to be returned in this type of mapping of promises.
- The promises are executed parallely for all items in the array, but for each item, the order of calls is maintained.

```
const promises2 = arr.map(async (item) => {
  const callOneResponse = await makeCallOne(item);
  const callTwoResponse = await makeCallTwo(callOneResponse);
  const callThreeResponse = await makeCallThree(callTwoResponse);
});

await promise.all(promises2);
```

## for-of

- for-of will loop over the elements and wait for any awaits in each iteration.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const n of arr) {
  console.log("here 1", n);
  const res = await axios.get(`https://xkcd.com/${n}/info.0.json`);
  console.log("here 2", n, res.data.title);
}
```

## for-await-of

- for-await-of is used to loop over the promises array, the resolved data will be available in the iterating variable.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const promises = arr.map(async (n) => {
  return axios.get(`https://xkcd.com/${n}/info.0.json`);
});

for await (const n of promises) {
  console.log("here 1", n.data.title);
}
```

## for-in

- for-in will loop over the elements and wait for any awaits in each iteration.

```
for (const x in arr) {
  const n = arr[x];
  console.log("here 1", n);
  const res = await axios.get(`https://xkcd.com/${n}/info.0.json`);
  console.log("here 2", n, res.data.title);
}
```
