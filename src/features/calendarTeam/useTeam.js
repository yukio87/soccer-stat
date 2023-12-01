import { useQuery } from '@tanstack/react-query';

import { getTeam } from '../../services/apiSoccerStat';

function useTeam(id) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['team', id],
    queryFn: () => getTeam(id),
  });

  return { isLoading, data, isError, error };
}

export default useTeam;
