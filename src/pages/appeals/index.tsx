import { useGetAppealListQuery } from 'store/api/appealApi';

import { MainLayout } from 'layouts/main/Main';

export default function AppealList() {
  const { data: appeals = [] } = useGetAppealListQuery({});

  return <MainLayout>{appeals.map(({ uuid, client }) => JSON.stringify(client))}</MainLayout>;
}
