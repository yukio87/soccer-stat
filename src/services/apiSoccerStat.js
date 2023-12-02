import axios from 'axios';

import { API_URL } from '../utils/constants';

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// Временное решение (ошибка CORS policy)
// https://cors-anywhere.herokuapp.com/corsdemo
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

export async function getCompetitions() {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/competitions/`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data.competitions;
  } catch (err) {
    throw new Error('Failed getting competitions...');
  }
}

export async function getTeams() {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/teams/`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data.teams;
  } catch (err) {
    throw new Error('Failed getting teams...');
  }
}

export async function getTeam(id) {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/teams/${id}`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res;
  } catch (err) {
    throw new Error('Failed getting team...');
  }
}

export async function getMatchesCompetitions(id) {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/competitions/${id}/matches`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data;
  } catch (err) {
    throw new Error('Failed getting matches...');
  }
}

export async function getMatchesTeam(id) {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/teams/${id}/matches`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data;
  } catch (err) {
    throw new Error('Failed getting matches...');
  }
}

export async function getFilteredMatchesCompetitions(id, dateFrom, dateTo) {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/competitions/${id}/matches`, {
      params: { dateFrom, dateTo },
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data.matches;
  } catch (err) {
    throw new Error('Failed getting matches...');
  }
}

export async function getFilteredMatchesTeam(id, dateFrom, dateTo) {
  try {
    const res = await axios(`${corsAnywhere}${API_URL}/teams/${id}/matches`, {
      params: { dateFrom, dateTo },
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    return res.data.matches;
  } catch (err) {
    throw new Error('Failed getting matches...');
  }
}
