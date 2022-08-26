import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  WEEK_TREND_URL,
  FIND_FILM,
  GET_GENRE,
} from './api_const';

import { showSpinner } from '../../index';

const spinnerDiv = document.querySelector('.loader');

// Получение полной информации о трендах за день
export const getDayTrendData = async (page = 1) => {
  try {
    showSpinner();
    // spinnerDiv.style.display = 'block';
    const { data } = await axios.get(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('Неудачный запрос' + error);
  }
};

// Получение полной информации о трендах за неделю
export const getWeekTrendData = async (page = 1) => {
  try {
    showSpinner();
    // spinnerDiv.style.display = 'block';
    const { data } = await axios.get(
      `${WEEK_TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('Неудачный запрос' + error);
  }
};

// Костиль для получение полной информации о трендах
export const getTrendData = async (page = 1) => {
  const sort = localStorage.getItem('sort');
  return sort === 'week' ? getWeekTrendData(page) : getDayTrendData(page);
};

// Поиск фильма по поисковому запросу
export const fetchMovieSearch = async (text, page = 1) => {
  try {
    showSpinner();
    // spinnerDiv.style.display = 'block';
    const { data } = await axios.get(
      `${FIND_FILM}?api_key=${API_KEY}&query=${text}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('Неудачный запрос' + error);
  }
};

// Поиск фильма по id
export const fetchMovieId = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}${id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error('Неудачный запрос' + error);
  }
};

// Список всех жанров
export const getGenre = async () => {
  try {
    const { data } = await axios.get(`${GET_GENRE}?api_key=${API_KEY}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Неудачный запрос' + error);
  }
};
