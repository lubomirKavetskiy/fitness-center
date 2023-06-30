import { Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import type { Coaches as CoachesType } from '../../../../shared/types';
import { Card } from '../common/Card';

interface CoacheProps {
  coacheData: CoachesType;
}
export function Coache({ coacheData }: CoacheProps): ReactElement {
  const cardContents = (
    <Text align="center">{coacheData.trainingNames.join(', ')}</Text>
  );

  return (
    <Card
      itemName={coacheData.name}
      image={coacheData.image}
      cardContents={cardContents}
    />
  );
}
