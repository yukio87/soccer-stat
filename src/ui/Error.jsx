import { useNavigate, useRouteError } from 'react-router-dom';

import styles from './Error.module.scss';

function Error({ type = 'errorRoute', message }) {
  const navigate = useNavigate();
  const errorRoute = useRouteError();

  if (type === 'errorRoute') {
    return (
      <div className={styles.error}>
        <h1>{errorRoute.error?.message || errorRoute.message}</h1>
        <a onClick={() => navigate(-1)}>&larr; Go back</a>
      </div>
    );
  }

  if (type === 'errorQuery') {
    return (
      <div className={styles.error}>
        <h1>{message}</h1>
        <a onClick={() => navigate(-1)}>&larr; Go back</a>
      </div>
    );
  }
}

export default Error;
