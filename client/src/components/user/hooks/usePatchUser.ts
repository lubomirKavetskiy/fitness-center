import { useCustomToast } from 'components/app/hooks/useCustomToast';
import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { queryKeys } from 'react-query/constants';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

// TODO: update type to UseMutateFunction type
export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const { user, updateUser } = useUser();
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      // onMutate returns context that is passed to onError
      onMutate: async (newData: User | null) => {
        // cancel any outdoing queries for user data, so old server data
        // doesn't overwrite our optimistic update
        queryClient.cancelQueries(queryKeys.user);

        // snapshot of previuos user value
        const prevUserData: User = queryClient.getQueryData(queryKeys.user);

        // optimistically update the cache with new user value
        updateUser(newData);

        // return the context object with snapshotted value
        return { prevUserData };
      },
      onError: (_error, _newData, context) => {
        // roll back cache to saved value
        if (context?.prevUserData) {
          updateUser(context?.prevUserData);

          toast({
            title: 'Update failed; restoring previous values',
            status: 'warning',
          });
        }
      },
      onSuccess: (userData: User | null) => {
        if (userData) {
          // no longer need it after implementing onMutate
          // updateUser(userData);
          toast({ title: 'User updated', status: 'success' });
        }
      },
      onSettled: () => {
        // invalidate user data (query) to make sure we're in syncwith server data
        // refetch user data
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}