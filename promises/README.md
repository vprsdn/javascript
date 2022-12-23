### Promise.all:
- This will reject as soon as one of the Promises in the array rejects.
- If any one is rejected, it has to be caught in a catch block after Promise.all(...).catch(err => console.log(err))

### Promise.allSettled:
- This will resolve once all Promises in the array have either rejected or resolved.
- Better to use this.

### Promise.any:
- This will resolve all the promises in the array and return only the array with resolved promises.

### Promise.catch:
- This gets hit in case of Promise.all.

### Promise.race:
- This returns the first promise that gets resolved.

### Promise states:
- Pending
- Fulfilled
- Rejected