import defaultOptions from './options';

export default (url, options = defaultOptions) => {
  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(Error('error'))
  }).catch(error => {
    return Promise.reject(Error(error.message))
  })
};
