import { Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import type { Training as TrainingType } from '../../../../shared/types';
import { Card } from '../common/Card';

interface TrainingProps {
  trainingData: TrainingType;
}
export function Training({ trainingData }: TrainingProps): ReactElement {
  const cardContents = <Text>{trainingData.description}</Text>;

  return (
    <Card
      itemName={trainingData.name}
      image={trainingData.image}
      cardContents={cardContents}
    />
  );
}
