const address = {
  city: "blr",
};

const bike = {
  make: "yamaha",
  model: "fz",
};

const arr = [1, 2, bike];

const user = {
  name: "vinay",
  age: 30,
  address,
  bike: arr,
};

function dca(arr) {
  const tempArr = [];
  arr.forEach((i) => {
    if (
      i instanceof Date ||
      i === null ||
      i === undefined ||
      typeof i === "function" ||
      typeof i !== "object"
    ) {
      tempArr.push(i);
    } else if (Array.isArray(i)) {
      tempArr.push(dca(i));
    } else if (Object.getPrototypeOf(i) === Object.prototype) {
      tempArr.push(dco(i));
    }
  });
  return tempArr;
}

function dco(o) {
  const copiedObject = {};
  for (let key in o) {
    if (!o.hasOwnProperty(key)) continue;
    const value = o[key];
    if (
      value instanceof Date ||
      value === null ||
      value === undefined ||
      typeof value === "function" ||
      typeof value !== "object"
    ) {
      copiedObject[key] = value;
    } else if (Array.isArray(value)) {
      copiedObject[key] = dca(value);
    } else if (Object.getPrototypeOf(value) === Object.prototype) {
      copiedObject[key] = dco(value);
    }
  }

  return copiedObject;
}

const copiedUser = dco(user);
// const copiedUser = {...user}

user.age = 27;
address.city = "mys";
bike.model = "r15";

console.log(JSON.stringify(user));
console.log(JSON.stringify(copiedUser));
