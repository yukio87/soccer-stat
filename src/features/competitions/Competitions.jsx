import { createContext } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ListCompetitions from './ListCompetitions';
import PaginationCompetitions from './PaginationCompetitions';
import { getCompetitions } from '../../services/apiSoccerStat';
import Box from '../../ui/Box';
import InputContext from '../../ui/InputContext';

export const CompetitionsContext = createContext();

function Competitions() {
  const competitions = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchedCompetitions =
    searchQuery.length > 0
      ? competitions.filter(item =>
          `${item.name} ${item.area.name}`.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : competitions;

  return (
    <CompetitionsContext.Provider
      value={{ searchedCompetitions, searchQuery, setSearchQuery, currentPage, setCurrentPage }}
    >
      <Box>
        <InputContext context={CompetitionsContext} />
        <ListCompetitions />
        <PaginationCompetitions />
      </Box>
    </CompetitionsContext.Provider>
  );
}

export async function loader() {
  const competitions = await getCompetitions();
  return competitions;
}

export default Competitions;
