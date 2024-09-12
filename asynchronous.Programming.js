// 1. Iterating with Async/Await
// Helper function to introduce a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to iterate with delay
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await delay(1000); // Wait for 1 second
    console.log(value);
  }
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);



// 2. Awaiting a Call

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Fetched data from API");
    }, 2000); // Simulating a 2-second API call
  });
}

// Async function to await API call
async function awaitCall() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
awaitCall();




// 3. Handling Errors with Async/Await
//API call function with potential error
function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("API call failed"));
    }, 2000); // Simulating a 2-second API call
  });
}

// Async function to await API call with error handling
async function awaitCall() {
  try {
    const data = await fetchDataWithError();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong while fetching data:", error.message);
  }
}

// Example usage
awaitCall();





