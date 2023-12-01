import { useContext } from 'react';

import styles from './ListCompetitions.module.scss';
import ItemCard from './ItemCard';
import { getAmountItemsOnCompetitionsPage, getSearchResultsPage } from '../../utils/helpers';
import { CompetitionsContext } from './Competitions';
import useScreenSize from '../../customHooks/useScreenSize';

function ListCompetitions() {
  const screenSize = useScreenSize();
  const { searchedCompetitions, currentPage } = useContext(CompetitionsContext);

  const amountItemsOnPage = getAmountItemsOnCompetitionsPage(screenSize.width, screenSize.height);

  const competitionsPage = getSearchResultsPage(
    searchedCompetitions,
    currentPage,
    amountItemsOnPage,
  );

  return (
    <div className={styles.competitionsBox}>
      {competitionsPage.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListCompetitions;
