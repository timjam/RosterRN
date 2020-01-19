const postJSONContent = (args) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...args }),
  };
};

export default postJSONContent;
