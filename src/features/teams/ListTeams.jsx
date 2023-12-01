import { useContext } from 'react';

import styles from './ListTeams.module.scss';
import ItemCard from './ItemCard';
import { getAmountItemsOnTeamsPage, getSearchResultsPage } from '../../utils/helpers';
import { TeamsContext } from './Teams';
import useScreenSize from '../../customHooks/useScreenSize';

function ListTeams() {
  const { width } = useScreenSize();
  const { searchedTeams, currentPage } = useContext(TeamsContext);

  const amountItemsOnPage = getAmountItemsOnTeamsPage(width);

  const teamsPage = getSearchResultsPage(searchedTeams, currentPage, amountItemsOnPage);

  return (
    <div className={styles.teamsBox}>
      {teamsPage.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListTeams;
