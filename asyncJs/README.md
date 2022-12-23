##	Set Timeout:
-	Syntax:
```
const timeoutId = setTimeout(callbackFn, 2000, "John", "Doe", 97, ...);
```
-	Callback function, timeout delay in ms, followed by list of args to be passed to the callback function.
-	Returns an ID that can be used to stop the timeout using `clearTimeout(timeoutId)`.

##	Set Interval:
-	Syntax:
```
const intervalId = setInterval(callbackFn, 2000, "John", "Doe", 97, ...);
```
-	Callback function, timeout delay in ms, followed by list of args to be passed to the callback function.
-	Returns an ID that can be used to stop the interval using `clearInterval(intervalId)`.

### Note:
-	Timeouts and intervals are functionalities implemented by the browser and are not part of JS itself.
-	The time delay is the minimum delay that happens and not a guaranteed delay.
-	