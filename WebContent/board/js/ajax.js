export const getData = (params) => {
  let url = 'board_list.ajax?';
  let i = 0;
  for (let key in params) {
    if (params[key]) {
      if (i === 0) {
        url += key + '=';
        url += params[key];
        i++;
      }
      url += '&' + key + '=';
      url += params[key];
    }
  }

  const data = fetch(url)
    .then((response) => response.json())
    .then((json) => json);

return data;
};
