import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';

import styles from './PaginationCompetitions.module.scss';
import { CompetitionsContext } from './Competitions';
import { AMOUNT_ITEMS_COMPETITIONS } from '../../utils/constants';
import useScreenSize from '../../customHooks/useScreenSize';
import { getSizePagination } from '../../utils/helpers';

function PaginationCompetitions() {
  const { width } = useScreenSize();
  const { setCurrentPage, searchedCompetitions } = useContext(CompetitionsContext);

  const pagesAmount = Math.ceil(searchedCompetitions.length / AMOUNT_ITEMS_COMPETITIONS);

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

export default PaginationCompetitions;
