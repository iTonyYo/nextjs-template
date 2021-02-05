import getLocales from 'helpers/getLocales';
import log from 'helpers/log';

export async function getStaticProps({ locale }) {
  log('MinePage.getStaticProps()');

  return {
    props: {
      locales: await getLocales(locale),
    },
  };
}

export { default } from './mine';
