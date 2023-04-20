import { api } from 'store/api';

import { CurrentUserUpdateDto } from 'types/dto/current-user/update.dto';
import { User } from 'types/entities/User';

import { Path } from 'constants/paths';

export const currentUserApi = api.injectEndpoints({
  endpoints: builder => ({
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        url: `${Path.AUTH}/${Path.CURRENT_USER}`,
        method: 'GET',
      }),
    }),
    updateCurrentUser: builder.mutation<void, CurrentUserUpdateDto>({
      query: body => ({
        url: `${Path.AUTH}/${Path.CURRENT_USER}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteCurrentUser: builder.mutation<void, void>({
      query: () => ({
        url: `${Path.AUTH}/${Path.CURRENT_USER}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useUpdateCurrentUserMutation, useDeleteCurrentUserMutation } = currentUserApi;
