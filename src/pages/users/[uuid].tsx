import { useGetUserQuery } from 'store/api/userApi';

import { MainLayout } from 'layouts/main/Main';

import { useAppNavigation } from 'components/navigation';

export default function User() {
  const {
    query: { uuid: queryUuid },
  } = useAppNavigation();

  const uuid = String(queryUuid) || '';

  const { data: user } = useGetUserQuery({ uuid });

  return <MainLayout>{JSON.stringify(user)}</MainLayout>;
}
