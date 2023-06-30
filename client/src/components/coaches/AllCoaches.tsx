import { Box, Heading, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useTrainings } from '../trainings/hooks/useTrainings';
import { Coache } from './Coache';
import { useCoaches } from './hooks/useCoaches';

export function AllCoaches(): ReactElement {
  // replace with data from React Query
  const { coaches, filter, setFilter } = useCoaches();
  const trainings = useTrainings();

  return (
    <Box>
      <Heading mt={10} align="center">
        Our Coaches
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {coaches?.map((coacheData) => (
          <Coache key={coacheData.id} coacheData={coacheData} />
        ))}
      </HStack>
      <RadioGroup onChange={setFilter} value={filter}>
        <HStack my={10} spacing={8} justify="center">
          <Heading size="md">Filter by training:</Heading>
          <Radio value="all">All</Radio>
          {trainings?.map((t) => (
            <Radio key={t.id} value={t.name}>
              {t.name}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  );
}
