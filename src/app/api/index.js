import { SPACEX_API_HISTORY_URL } from '../config';

async function fetchData(request) {
  let json;
  const response = await fetch(request);
  try {
    json = await response.json();
  } catch (error) {
    console.error(error);
  }
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return json;
}

export const fetchHistoryData = async () => {
  const history = await fetchData(SPACEX_API_HISTORY_URL);
  return history;
};
