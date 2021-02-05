import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import log from 'helpers/log';

MinePage.propTypes = {
  locales: PropTypes.object.isRequired,
};

export default function MinePage({ locales = {} }) {
  const router = useRouter();

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            log('在 MinePage 上点击了 "返回" 按钮');
            router.back();
          }}
        >
          {get(locales, 'global.back')}
        </Button>
      </Grid>
    </Grid>
  );
}
