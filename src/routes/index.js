import NotFound from '../views/pages/notfound';
import Dashboard from '../views/pages/dashboard/indexj';
import BSCPairExplorer from '../views/pages/bsc/pair_explorer';
import BSCLiveNewPair from '../views/pages/bsc/live_new_pairs';
import PageStats from '../views/pages/others/stats';
import PageCharts from '../views/pages/others/charts';
import PageMultiiCharts from '../views/pages/others/marticharts';

const routes = [
  {
    path: '/',
    element: <Dashboard/>,
    exact: true,
  },
  {
    path: '/bsc/live_new_pairs',
    element: <BSCLiveNewPair />,
  },
  {
    path: '/bsc/pair_explorer',
    element: <BSCPairExplorer />,
  },
  {
    path: '/stats',
    element: <PageStats/>,
    exact: true,
  },
  {
    path: '/charts/:token',
    element: <PageCharts/>,
    exact: true,
  },
  {
    path: '/mutlicharts',
    element: <PageMultiiCharts/>,
    exact: true,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;