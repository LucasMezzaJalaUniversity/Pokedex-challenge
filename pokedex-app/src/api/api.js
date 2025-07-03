export const getRequestFromAPI = async (url) => {
  try {
    const response = await fetch(url);

    if(!response.ok) throw new Error('Failes to fetch');

    return await response.json();
  } catch {
    throw new Error('server error');
  }
};