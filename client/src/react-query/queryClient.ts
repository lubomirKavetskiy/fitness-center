import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';

import { theme } from '../theme';

const toast = createStandaloneToast({ theme });

function queryErrorHandler(error: unknown): void {
  const id = 'react-query-error';
  const title =
    error instanceof Error ? error.message : 'error connecting to server';

  toast({ id, title, status: 'error', variant: 'subtle', isClosable: true });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 3000, // 20 seconds
      cacheTime: 9000,
      // refetchOnMount: false,
      refetchOnReconnect: false,
      // refetchOnWindowFocus: true,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
