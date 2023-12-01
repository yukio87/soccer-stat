import {
  AMOUNT_ITEMS_TEAMS_DESKTOP_LG,
  AMOUNT_ITEMS_TEAMS_DESKTOP_MD,
  AMOUNT_ITEMS_TEAMS_DESKTOP_SM,
  AMOUNT_ITEMS_COMPETITIONS,
  AMOUNT_ITEMS_COMPETITIONS_MOBILE,
  WIDTH_SCREEN_MD,
  WIDTH_SCREEN_SM,
  WIDTH_SCREEN_MOBILE,
  HEIGHT_SCREEN_MOBILE,
} from './constants';

export function getSearchResultsPage(initialArray, page = 1, resultsPerPage = 9) {
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;

  return initialArray.slice(start, end);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);

  return `${day}.${month}.${year}`;
}

export function formatTime(dateStr) {
  const date = new Date(dateStr);

  const hour = `${date.getHours()}`.padStart(2, 0);
  const min = `${date.getMinutes()}`.padStart(2, 0);

  return `${hour}.${min}`;
}

export function getAmountItemsOnTeamsPage(screenWidth) {
  if (screenWidth > WIDTH_SCREEN_MD) return AMOUNT_ITEMS_TEAMS_DESKTOP_LG;
  if (screenWidth <= WIDTH_SCREEN_MD && screenWidth > WIDTH_SCREEN_SM)
    return AMOUNT_ITEMS_TEAMS_DESKTOP_MD;
  if (screenWidth <= WIDTH_SCREEN_SM) return AMOUNT_ITEMS_TEAMS_DESKTOP_SM;
}

export function getAmountItemsOnCompetitionsPage(screenWidth, screenHeight) {
  if (screenHeight <= HEIGHT_SCREEN_MOBILE) return 10;
  if (screenWidth > WIDTH_SCREEN_MD) return AMOUNT_ITEMS_COMPETITIONS;
  if (screenWidth <= WIDTH_SCREEN_MOBILE) return AMOUNT_ITEMS_COMPETITIONS_MOBILE;
}

export function getSizePagination(screenWidth) {
  if (screenWidth > WIDTH_SCREEN_MD) return 'large';
  if (screenWidth <= WIDTH_SCREEN_MD) return 'medium';
}
