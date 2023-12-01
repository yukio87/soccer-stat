import { useContext } from 'react';

import styles from './ListMatches.module.scss';
import { getSearchResultsPage } from '../../utils/helpers';
import { AMOUNT_ITEMS_MATCHES } from '../../utils/constants';
import Loader from '../../ui/Loader';
import { CalendarTeamContext } from './CalendarTeam';
import ItemTeam from './ItemTeam';

function ListMatches() {
  const { filteredMatches, currentPage, isLoadingMatches } = useContext(CalendarTeamContext);

  if (isLoadingMatches) return <Loader />;

  const matchesPage = getSearchResultsPage(filteredMatches, currentPage, AMOUNT_ITEMS_MATCHES);

  return (
    <ul className={styles.list}>
      {matchesPage.map(item => (
        <ItemTeam item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ListMatches;
