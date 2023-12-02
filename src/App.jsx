import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Competitions from './features/competitions/Competitions';
import Teams from './features/teams/Teams';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { loader as competitionsLoader } from './features/competitions/Competitions';
import { loader as matchesCompetitionsLoader } from './features/calendarCompetitions/CalendarCompetitions';
import { loader as teamsLoader } from './features/teams/Teams';
import { loader as matchesTeamLoader } from './features/calendarTeam/CalendarTeam';
import CalendarCompetitions from './features/calendarCompetitions/CalendarCompetitions';
import CalendarTeam from './features/calendarTeam/CalendarTeam';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/soccer-stat',
          element: <Competitions />,
          loader: competitionsLoader,
          errorElement: <Error />,
        },
        {
          path: '/soccer-stat/:leagueId',
          element: <CalendarCompetitions />,
          loader: matchesCompetitionsLoader,
          errorElement: <Error />,
        },
        {
          path: '/soccer-stat/teams',
          element: <Teams />,
          loader: teamsLoader,
          errorElement: <Error />,
        },
        {
          path: '/soccer-stat/teams/:teamId',
          element: <CalendarTeam />,
          loader: matchesTeamLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
