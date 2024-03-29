import {
  FormHelperText as FHT,
  FormHelperTextProps,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import fp from 'lodash/fp';
import { FaInfoCircle } from 'react-icons/fa';

export type IFormHelperTextProps = FormHelperTextProps;

export const FormHelperText: React.FC<IFormHelperTextProps> = (
  props,
): JSX.Element | null => {
  const { children, ...rest } = props;

  if (fp.isEmpty(children) || fp.isNil(children)) return null;

  return (
    <FHT {...rest}>
      <Stack align="center" isInline>
        <Icon as={FaInfoCircle} boxSize={4} color="primary.100" />
        <Text align="start" as="span">
          {children}
        </Text>
      </Stack>
    </FHT>
  );
};

FormHelperText.defaultProps = {
  color: 'blackAlpha.500',
  fontSize: 'xs',
  fontWeight: 'semibold',
};
