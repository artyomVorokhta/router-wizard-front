import { api } from 'store/api';

import { AppealCreateDto } from 'types/dto/appeal/create.dto';
import { AppealGetManyDto } from 'types/dto/appeal/get-many.dto';
import { AppealGetOneDto } from 'types/dto/appeal/get-one.dto';
import { AppealUpdateDto } from 'types/dto/appeal/update.dto';
import { Appeal } from 'types/entities/Appeal';

import { Path } from 'constants/paths';

export const appealApi = api.injectEndpoints({
  endpoints: builder => ({
    getAppealList: builder.query<Appeal[], AppealGetManyDto>({
      query: () => ({
        url: `${Path.APPEALS}`,
        method: 'GET',
      }),
    }),
    getAppeal: builder.query<Appeal, AppealGetOneDto>({
      query: ({ uuid }) => ({
        url: `${Path.APPEALS}/${uuid}`,
        method: 'GET',
      }),
    }),
    createAppeal: builder.mutation<void, AppealCreateDto>({
      query: body => ({
        url: `${Path.APPEALS}`,
        method: 'POST',
        body,
      }),
    }),
    updateAppeal: builder.mutation<void, AppealUpdateDto>({
      query: ({ uuid, ...body }) => ({
        url: `${Path.APPEALS}/${uuid}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteAppeal: builder.mutation<void, string>({
      query: uuid => ({
        url: `${Path.APPEALS}/${uuid}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAppealListQuery,
  useGetAppealQuery,
  useCreateAppealMutation,
  useUpdateAppealMutation,
  useDeleteAppealMutation,
} = appealApi;
