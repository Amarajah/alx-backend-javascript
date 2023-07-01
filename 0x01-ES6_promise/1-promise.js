export default function getFullResponseFromAPI(success) {
  return new Promise((result, reject) => {
    if (success) {
      result({ status: 200, body: 'Success' });
    } else {
      reject(Error('API does not work'));
    }
  });
}
