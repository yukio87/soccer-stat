import { createContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import styles from './CalendarTeam.module.scss';
import { getMatchesTeam } from '../../services/apiSoccerStat';
import useTeam from './useTeam';
import Error from '../../ui/Error';
import FilterDateContext from '../../ui/FilterDateContext';
import MatchesList from './ListMatches';
import useFilteredMatches from './useFilteredMatches';
import PaginationTeam from './PaginationCalendarTeam';

export const CalendarTeamContext = createContext();

function CalendarTeam() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateQueryFrom, setDateQueryFrom] = useState('');
  const [dateQueryTo, setDateQueryTo] = useState('');
  const { teamId } = useParams();
  const matches = useLoaderData();

  const {
    isLoading: isloadingTeam,
    data: dataTeam,
    isError: isErrorTeam,
    error: errorTeam,
  } = useTeam(teamId);

  const {
    isLoading: isLoadingMatches,
    data: dataMatches,
    isError: isErrorMatches,
    error: errorMatches,
  } = useFilteredMatches(teamId, dateQueryFrom, dateQueryTo);

  if (isErrorTeam) return <Error type="errorQuery" message={errorTeam.message} />;
  if (isErrorMatches) return <Error type="errorQuery" message={errorMatches.message} />;

  const filteredMatches = dateQueryFrom && dateQueryTo ? dataMatches : matches.matches;

  return (
    <CalendarTeamContext.Provider
      value={{
        filteredMatches,
        isLoadingMatches,
        dateQueryFrom,
        dateQueryTo,
        setDateQueryFrom,
        setDateQueryTo,
        setCurrentPage,
        currentPage,
      }}
    >
      <div className={styles.teamBox}>
        <p className={styles.navChain}>
          <Link to="/soccer-stat/teams" className={styles.navLink}>
            Команды
          </Link>{' '}
          &gt; {!isloadingTeam ? dataTeam.data.name : ''}
        </p>
        <h1 className={styles.title}>Матчи</h1>
        <FilterDateContext context={CalendarTeamContext} />
        <MatchesList />
        <PaginationTeam />
      </div>
    </CalendarTeamContext.Provider>
  );
}

export async function loader({ params }) {
  const matches = await getMatchesTeam(params.teamId);
  return matches;
}

export default CalendarTeam;
