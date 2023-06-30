import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { BackgroundImage } from '../common/BackgroundImage';
import { usePrefetchTrainings } from '../trainings/hooks/useTrainings';

export function Home(): ReactElement {
  usePrefetchTrainings();

  return (
    <Stack align="center" justify="center" height="100vh - 64px">
      <BackgroundImage />
    </Stack>
  );
}
