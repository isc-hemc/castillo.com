import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { Spotlight } from './components/Spotlight';

export const Home = (): JSX.Element => {
  const { t } = useTranslation('page:home');

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Spotlight />
    </>
  );
};
