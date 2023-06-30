import { Box, Heading, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useTrainings } from './hooks/useTrainings';
import { Training } from './Training';

export function Trainings(): ReactElement {
  const trainings = useTrainings();

  return (
    <Box>
      <Heading mt={10} align="center">
        Available Trainings
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {trainings?.map((trainingData) => (
          <Training key={trainingData.id} trainingData={trainingData} />
        ))}
      </HStack>
    </Box>
  );
}
