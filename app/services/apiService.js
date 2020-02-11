const apiService = {
  post: (url, content) => {
    return new Promise((resolve, reject) => {
      fetch(url, content)
        .then((response) => {
          if (response.ok) {
            resolve(response);
          } else {
            response.text().then((body) => {
              reject(new Error(`${JSON.parse(body).message}`));
            });
          }
        })
        .catch((error) => {
          reject(new Error(`Unable to send data - ${error.message}`));
        });
    });
  },
};

export default apiService;
