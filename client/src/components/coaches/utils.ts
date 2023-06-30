import type { Coaches } from '../../../../shared/types';

export function filterByTraining(
  coaches: Coaches[],
  trainingName: string,
): Coaches[] {
  return coaches.filter((person) =>
    person.trainingNames
      .map((t) => t.toLowerCase())
      .includes(trainingName.toLowerCase()),
  );
}
