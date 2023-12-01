import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';

import styles from './PaginationCalendarCompetitions.module.scss';
import { CalendarCompetitionsContext } from './CalendarCompetitions.jsx';
import { AMOUNT_ITEMS_MATCHES } from '../../utils/constants.js';
import useScreenSize from '../../customHooks/useScreenSize';
import { getSizePagination } from '../../utils/helpers';

function PaginationCalendarCompetitions() {
  const { width } = useScreenSize();
  const { filteredMatches, isLoading, setCurrentPage } = useContext(CalendarCompetitionsContext);

  if (isLoading) return null;

  const pagesAmount = Math.ceil(filteredMatches.length / AMOUNT_ITEMS_MATCHES);

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

export default PaginationCalendarCompetitions;
