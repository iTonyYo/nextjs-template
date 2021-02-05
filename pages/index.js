import getLocales from 'helpers/getLocales';
import log from 'helpers/log';

export async function getStaticProps({ locale = {} }) {
  log('HomePage.getStaticProps()');

  return {
    props: {
      locales: await getLocales(locale),
    },
  };
}

export { default } from 'pages/home';
