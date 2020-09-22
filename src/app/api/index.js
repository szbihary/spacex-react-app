import { SPACEX_API_HISTORY_URL, SPACEX_API_LAUNCHES_URL, SPACEX_API_ROCKETS_URL } from '../config';

async function fetchData(url) {
  let json;
  const response = await fetch(url);
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

export const fetchHistory = async () => {
  const history = await fetchData(SPACEX_API_HISTORY_URL);
  return history;
};

export const fetchLaunches = async () => {
  const launches = await fetchData(SPACEX_API_LAUNCHES_URL);
  return launches;
};

export const fetchRockets = async () => {
  const launches = await fetchData(SPACEX_API_ROCKETS_URL);
  return launches;
};
