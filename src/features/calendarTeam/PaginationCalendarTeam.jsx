import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';

import styles from './PaginationCalendarTeam.module.scss';
import { AMOUNT_ITEMS_TEAM_CALENDAR } from '../../utils/constants.js';
import { CalendarTeamContext } from './CalendarTeam.jsx';
import useScreenSize from '../../customHooks/useScreenSize';
import { getSizePagination } from '../../utils/helpers';

function PaginationCalendarTeam() {
  const { width } = useScreenSize();
  const { filteredMatches, isLoadingMatches, setCurrentPage } = useContext(CalendarTeamContext);

  if (isLoadingMatches) return null;

  const pagesAmount = Math.ceil(filteredMatches.length / AMOUNT_ITEMS_TEAM_CALENDAR);

  function handleChange(_, value) {
    setCurrentPage(value);
  }

  return pagesAmount > 1 ? (
    <Pagination
      className={styles.pagination}
      count={pagesAmount}
      variant="outlined"
      shape="rounded"
      size={getSizePagination(width)}
      onChange={handleChange}
    />
  ) : null;
}

export default PaginationCalendarTeam;
