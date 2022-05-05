export default function Fetch(url: string, options: RequestInit = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((data) => data.json())
      .then(resolve)
      .catch(reject);
  });
}
