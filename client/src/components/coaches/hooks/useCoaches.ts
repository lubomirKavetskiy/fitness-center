import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import type { Coaches } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { filterByTraining } from '../utils';

// for when we need a query function for useQuery
async function getCoaches(): Promise<Coaches[]> {
  const { data } = await axiosInstance.get('/coaches');

  return data;
}

interface UseCoaches {
  coaches: Coaches[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export function useCoaches(): UseCoaches {
  // for filtering coaches by training
  const [filter, setFilter] = useState('all');

  const selectFn = useCallback(
    (unfilteredCoaches) => filterByTraining(unfilteredCoaches, filter),
    [filter],
  );

  const fallback = [];
  const { data: coaches = fallback } = useQuery(queryKeys.coaches, getCoaches, {
    select: filter === 'all' ? undefined : selectFn,
  });

  return { coaches, filter, setFilter };
}
