import { useQuery, useQueryClient } from 'react-query';

import type { Training } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

// for when we need a query function for useQuery
async function getTrainings(): Promise<Training[]> {
  const { data } = await axiosInstance.get('/trainings');

  return data;
}

export function useTrainings(): Training[] {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.trainings, getTrainings);

  return data;
}

export function usePrefetchTrainings(): void {
  const queryClient = useQueryClient();

  queryClient.prefetchQuery(queryKeys.trainings, getTrainings);
}
