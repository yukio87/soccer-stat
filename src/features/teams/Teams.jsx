import { useLoaderData } from 'react-router-dom';

import ListCard from './ListTeams';
import PaginationTeams from './PaginationTeams';
import { getTeams } from '../../services/apiSoccerStat';
import { createContext, useState } from 'react';
import Box from '../../ui/Box';
import InputContext from '../../ui/InputContext';

export const TeamsContext = createContext();

function Teams() {
  const teams = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchedTeams =
    searchQuery.length > 0
      ? teams.filter(item => `${item.name}`.toLowerCase().includes(searchQuery.toLowerCase()))
      : teams;

  return (
    <TeamsContext.Provider
      value={{
        searchedTeams,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
      }}
    >
      <Box>
        <InputContext context={TeamsContext} />
        <ListCard />
        <PaginationTeams />
      </Box>
    </TeamsContext.Provider>
  );
}

export async function loader() {
  const teams = await getTeams();
  return teams;
}

export default Teams;
