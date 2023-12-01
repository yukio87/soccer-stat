import { useQuery } from '@tanstack/react-query';

import { getFilteredMatchesTeam } from '../../services/apiSoccerStat';

function useFilteredMatches(id, dateFrom, dateTo) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['filteredMatchesTeam', id, dateFrom, dateTo],
    queryFn: () => getFilteredMatchesTeam(id, dateFrom, dateTo),
    enabled: !!dateFrom && !!dateTo,
  });

  return { isLoading, data, isError, error };
}

export default useFilteredMatches;
