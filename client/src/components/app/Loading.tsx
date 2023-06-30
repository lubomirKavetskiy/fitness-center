import { Spinner, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';

export function Loading(): ReactElement {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? 'inherit' : 'none';

  return (
    <Spinner
      width="80px"
      height="80px"
      thickness="6px"
      speed="0.5s"
      emptyColor="olive.400"
      color="olive.900"
      role="status"
      position="fixed"
      zIndex="9999"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      display={display}
    >
      <Text display="none">Loading...</Text>
    </Spinner>
  );
}
