import { api } from 'store/api';

import { UserCreateDto } from 'types/dto/user/create.dto';
import { UserGetManyDto } from 'types/dto/user/get-many.dto';
import { UserGetOneDto } from 'types/dto/user/get-one.dto';
import { UserUpdateDto } from 'types/dto/user/update.dto';
import { User } from 'types/entities/User';

import { Path } from 'constants/paths';

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getUserList: builder.query<User[], UserGetManyDto>({
      query: () => ({
        url: `${Path.USERS}`,
        method: 'GET',
      }),
    }),
    getUser: builder.query<User, UserGetOneDto>({
      query: ({ uuid }) => ({
        url: `${Path.USERS}/${uuid}`,
        method: 'GET',
      }),
    }),
    createUser: builder.mutation<void, UserCreateDto>({
      query: body => ({
        url: `${Path.USERS}`,
        method: 'POST',
        body,
      }),
    }),
    updateUser: builder.mutation<void, UserUpdateDto>({
      query: ({ uuid, ...body }) => ({
        url: `${Path.USERS}/${uuid}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: uuid => ({
        url: `${Path.USERS}/${uuid}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserListQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
