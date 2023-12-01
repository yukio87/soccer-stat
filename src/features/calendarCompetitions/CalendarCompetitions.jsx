import { Link, useLoaderData } from 'react-router-dom';

import styles from './CalendarCompetitions.module.scss';
import { getMatchesCompetitions } from '../../services/apiSoccerStat';
import FilterDateContext from '../../ui/FilterDateContext';
import ListMatches from './ListMatches';
import { createContext, useState } from 'react';
import PaginationCalendarCompetitions from './PaginationCalendarCompetitions';
import useFilteredMatches from './useFilteredMatches';
import Error from '../../ui/Error';

export const CalendarCompetitionsContext = createContext();

function CalendarCompetitions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateQueryFrom, setDateQueryFrom] = useState('');
  const [dateQueryTo, setDateQueryTo] = useState('');

  const matches = useLoaderData();

  const { isLoading, data, isError, error } = useFilteredMatches(
    matches.competition.id,
    dateQueryFrom,
    dateQueryTo,
  );

  if (isError) return <Error type="errorQuery" message={error.message} />;

  const filteredMatches = dateQueryFrom && dateQueryTo ? data : matches.matches;

  return (
    <CalendarCompetitionsContext.Provider
      value={{
        filteredMatches,
        isLoading,
        setCurrentPage,
        currentPage,
        dateQueryFrom,
        setDateQueryFrom,
        dateQueryTo,
        setDateQueryTo,
      }}
    >
      <div className={styles.calendarBox}>
        <p className={styles.navChain}>
          <Link to="/soccer-stat" className={styles.navLink}>
            Лиги
          </Link>{' '}
          &gt; {matches.competition.name}
        </p>
        <h1 className={styles.title}>Матчи</h1>
        <FilterDateContext context={CalendarCompetitionsContext} />
        <ListMatches />
        <PaginationCalendarCompetitions />
      </div>
    </CalendarCompetitionsContext.Provider>
  );
}

export async function loader({ params }) {
  const matches = await getMatchesCompetitions(params.leagueId);
  return matches;
}

export default CalendarCompetitions;
