// setInterval & setTimeout

// setTimeout(() => console.log("Delayed for 1 second"), 1000);

// setInterval(() => console.log("Invoke every 1 second"), 1000);

// Promise
let promise1 = new Promise(function (resolve, reject) {});

let promise2 = new Promise((resolve, reject) => {});

let greetingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World");
  }, 5000);
});

// if we print the promise:
// console.log(greetingPromise);

// .then

// greetingPromise.then((value) => {
//   console.log(value);
// });

// greetingPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.error(error));

// we can do multiple .then

// greetingPromise
//   .then((value) => `${value} and you`)
//   .then((value) => `${value} and you again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => console.log(value))
//   .catch((err) => {
//     console.log(err);
//   });
// Output: Hello, World and you and you again and again and again

// Handling errors

// let greetingPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("Something went wrong"));
//   }, 5000);
// });

// greetingPromise2.catch((error) => console.error(error));
// Error (Output): Something went wrong

// function checkMail() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Mail not arrived");
//     } else {
//       reject(new Error("Failed to arrive"));
//     }
//   });
// }

// .finally

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => console.log("experiment completed"));

// async await

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ value: "some data" }));
  }, 2000);
};

// const processData = async () => {
//   const data = await getData();
//   console.log(data);
// };

const processData = () => {
  getData().then((data) => {
    console.log(data);
  });
};

// processData();

// try and catch in async & await

const processData2 = async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// promise.all()

const getData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data 2"));
  }, 2000);
};

const getData3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data 3"));
  }, 3000);
};

const getData4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data 4"));
  }, 1000);
};

// Promise.all([getData2(), getData3(), getData4()])
//   .then((values) => console.log(values))
//   .catch((error) => console.error(error));

// #1

// let result;

// async function myFunction() {
//   // Some asynchronous code here
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return 42;
// }

// (async () => {
//   let result = await myFunction();
//   document.getElementById("demo").innerHTML = result; // prints: 42
// })();

// #2
//example of setInterval

// const myInterval = setInterval(myTimer, 1000);

// const messageContainer = document.getElementById("demo");

// let counter = 0;

// function myTimer() {
//   messageContainer.innerHTML = `Count: ${counter}`;
//   counter++;
// }

// function stopInterval() {
//   clearInterval(myInterval);
// }

// #3 - async await + try catch

// function myAsyncFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         // Some code that may throw an exception
//         const result = 42;
//         resolve(result);
//       } catch (e) {
//         reject(e);
//       }
//     }, 2000); // delay of 1 second (1000 milliseconds)
//   });
// }

// (async () => {
//   try {
//     const result = await myAsyncFunction();
//     document.getElementById("demo").innerHTML = result.toString(); // prints: 42
//   } catch (e) {
//     console.error(e); // handle the exception
//   }
// })();

/// ----------------------------

// Ajax

// Axios

async function getCountries() {
  try {
    const res = await axios.get("https://restcountries.com/v2/all");
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

// getCountries();
