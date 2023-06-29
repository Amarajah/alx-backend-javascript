export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call or asynchronous operation
    setTimeout(() => {
      const response = { data: 'Sample response from API' };
      resolve(response);
    }, 2000);
  });
}

