import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';

import styles from './PaginationTeams.module.scss';
import { TeamsContext } from './Teams';
import { AMOUNT_ITEMS_TEAMS_DESKTOP_LG } from '../../utils/constants';
import useScreenSize from '../../customHooks/useScreenSize';
import { getSizePagination } from '../../utils/helpers';

function PaginationTeams() {
  const { width } = useScreenSize();
  const { setCurrentPage, searchedTeams } = useContext(TeamsContext);

  const pagesAmount = Math.ceil(searchedTeams.length / AMOUNT_ITEMS_TEAMS_DESKTOP_LG);

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

export default PaginationTeams;
