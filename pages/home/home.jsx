import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import log from 'helpers/log';

import styles from 'pages/home/home.module.scss';

HomePage.propTypes = {
  locales: PropTypes.object.isRequired,
};

export default function HomePage({ locales }) {
  const router = useRouter();
  const txtDemo = get(locales, 'global.demo');

  return (
    <Grid container spacing={1} justify="center" alignItems="center">
      <Grid item>
        <Button
          color="primary"
          className={styles['opacity-50']}
          variant="contained"
          onClick={() => {
            log('即将访问 "个人中心" 页');
            router.push('/mine');
          }}
        >
          {txtDemo}
        </Button>
      </Grid>
    </Grid>
  );
}
