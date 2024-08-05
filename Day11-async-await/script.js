// const refister = async(req, res) => {

// }

// const obj = { presondetails: ["Ayush", "Singh", 19] };

// for (const val in obj){
//   console.log(val[2])
// }

// console.log(obj.presondetails[2]);

// const arr = [{ name: "ayush", age: 19, city: "Saharanpur" }, {}, 2, 4, 3];
// console.log(arr[0].name, arr[0].age, arr[0].city);

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello World");
    resolve("Promise one works");
  }, 2000);
});

promiseOne.then(() => {
  console.log("Promise Completed");
});

const promiseTwo = new Promise((resolve, reject) => {
  let check = false;

  setTimeout(() => {
    if (!check) {
      console.log("Promise two check false");
      resolve("Promise two now works");
    } else {
      reject("Error : error in promise two");
    }
  }, 2000);
});

// promiseTwo
//   .then(() => {
//     console.log("Promise two is resolved");
//   })
//   .catch((e) => {
//     console.log("Error in promise two" + e);
//   });

// Activity Two : Chaining Promises

// new Promise((resolve, reject) => {
//   const data = fetch("https://api.github.com/users/tomarayush8624");
//   resolve(data);
// })
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
//     return jsonData.login;
//   })
//   .then((username) => {
//     console.log("your username is - " + username);
//   });

// Activity Three : Using Async/Await

async function resolvePromiseTwo() {
  try {
    const text = await promiseTwo;
    console.log("Promise Two is resolved" + text);
  } catch (e) {
    console.log("Error in Promise Two: " + e);
  }
}

resolvePromiseTwo();

// Activity Four : Fetching Data via API

async function getUsername() {
  try {
    const data = await fetch("https://api.github.com/users/tomarayush8624");

    const jsonData = await data.json();
    console.log(jsonData.login);
  } catch (e) {
    console.log("Errors in fetching data " + e);
  }
}

getUsername();

// Concurrent Promises: using promise.all and promise.race

Promise.all([promiseOne, promiseTwo]).then((val) => {
  console.log(val);
});
