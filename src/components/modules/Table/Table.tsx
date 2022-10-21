import {
  Flex,
  FlexProps,
  Table as T,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import { Empty } from './components/Empty';
import { Loading } from './components/Loading';

export interface ITableProps extends FlexProps {
  /**
   * Array of strings where each element must be an i18n key from the `common` namespace.
   */
  headers?: string[];
  /**
   * If `true`, then the rendered component will be an empty container that
   * will notify the user that there are not results for its request.
   */
  isEmpty?: boolean;
  /**
   * If `true`, then the table will display an overlay layout with a spinner.
   */
  isLoading?: boolean;
}

export const Table: React.FC<ITableProps> = (props): JSX.Element => {
  const {
    children,
    headers = [],
    isEmpty = false,
    isLoading = false,
    ...rest
  } = props;

  const { t } = useTranslation('common');

  return (
    <>
      <Flex
        as={TableContainer}
        overflowX={isEmpty ? 'hidden' : 'auto'}
        {...rest}
      >
        {!isEmpty ? (
          <T position="relative" variant="simple">
            <Thead>
              <Tr>
                {headers.map((header) => (
                  <Th key={nanoid()} color="primary.700" py={4}>
                    {t(header)}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody sx={{ '&>tr': { '&:nth-of-type(odd)': { bg: 'bg' } } }}>
              {children}
            </Tbody>
          </T>
        ) : null}

        <Empty flex={1} isVisible={isEmpty && !isLoading} mx={8} />
      </Flex>

      <Loading isLoading={isLoading} />
    </>
  );
};

Table.defaultProps = {
  bg: 'white',
  border: '2px',
  borderColor: 'blackAlpha.100',
  direction: 'column',
  flex: 1,
  mt: '0 !important',
  overflowY: 'scroll',
  px: 4,
  py: 2,
  rounded: 'md',
};
