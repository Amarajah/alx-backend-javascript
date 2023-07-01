export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = 'API response';
      const isError = false;

      if (!isError) {
        resolve(response); // Resolve the promise with the response
      } else {
        reject(new Error('API error')); // Reject the promise with an error
      }
    }, 2000); // Simulating a 2-second delay
  });
}

