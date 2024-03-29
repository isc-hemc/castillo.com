import { Flex } from '@chakra-ui/react';
import { format } from 'date-fns';
import { CrudProvider } from 'providers';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BookingResources } from 'services/resources';

import { Calendar } from './components/Calendar';
import { Form } from './components/Form';
import { Headline } from './components/Headline';

const DEFAULT_VALUES = {
  check_in: format(new Date(), 'yyyy-MM-dd'),
  check_out: format(new Date(), 'yyyy-MM-dd'),
  email: '',
  first_surname: '',
  last_surname: '',
  name: '',
  phone: '',
};

export const Reservations = (): JSX.Element | null => {
  const { t } = useTranslation('page:admin');

  return (
    <CrudProvider defaultValues={DEFAULT_VALUES} resources={BookingResources}>
      <Helmet>
        <title>{t('bookings.helmet')}</title>
      </Helmet>

      <Headline mb={6} />

      <Flex
        flex={1}
        mt="0 !important"
        overflowY="scroll"
        sx={{ '&>div': { flex: 1 } }}
      >
        <Calendar />
      </Flex>

      <Form />
    </CrudProvider>
  );
};
