import { Outlet, useNavigation } from 'react-router-dom';

import styles from './AppLayout.module.scss';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className={styles.appLayout}>
      <Header />
      <div>{isLoading ? <Loader /> : <Outlet />}</div>{' '}
    </div>
  );
}

export default AppLayout;
