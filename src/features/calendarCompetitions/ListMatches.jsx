import { useContext } from 'react';

import styles from './ListMatches.module.scss';
import { CalendarCompetitionsContext } from './CalendarCompetitions';
import ItemMatches from './ItemMatches';
import { getSearchResultsPage } from '../../utils/helpers';
import { AMOUNT_ITEMS_MATCHES } from '../../utils/constants';
import Loader from '../../ui/Loader';

function ListMatches() {
  const { filteredMatches, currentPage, isLoading } = useContext(CalendarCompetitionsContext);

  if (isLoading) return <Loader />;

  const matchesPage = getSearchResultsPage(filteredMatches, currentPage, AMOUNT_ITEMS_MATCHES);

  return (
    <ul className={styles.list}>
      {matchesPage.map(item => (
        <ItemMatches item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ListMatches;
