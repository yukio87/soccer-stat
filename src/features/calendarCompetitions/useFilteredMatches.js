import { useQuery } from '@tanstack/react-query';

import { getFilteredMatchesCompetitions } from '../../services/apiSoccerStat';

function useFilteredMatches(id, dateFrom, dateTo) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['filteredMatchesCompetitions', id, dateFrom, dateTo],
    queryFn: () => getFilteredMatchesCompetitions(id, dateFrom, dateTo),
    enabled: !!dateFrom && !!dateTo,
  });

  return { isLoading, data, isError, error };
}

export default useFilteredMatches;
