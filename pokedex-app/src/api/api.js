const cache = new Map();

export const getRequestFromAPI = async (url) => {
  try {
    if(cache.has(url)) return cache.get(url)

    const response = await fetch(url);
    if(!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();
    cache.set(url, data)

    return data;
  } catch {
    throw new Error('server error');
  }
};