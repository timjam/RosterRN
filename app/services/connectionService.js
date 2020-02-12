const postJSONContent = (args) => {
  const { token, ...body } = args;
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
    body: JSON.stringify({ ...body }),
  };
};

export default postJSONContent;
