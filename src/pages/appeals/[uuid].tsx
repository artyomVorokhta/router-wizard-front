import { useGetAppealQuery } from 'store/api/appealApi';

import { MainLayout } from 'layouts/main/Main';

import { useAppNavigation } from 'components/navigation';

export default function Appeal() {
  const {
    query: { uuid: queryUuid },
  } = useAppNavigation();

  const uuid = String(queryUuid) || '';

  const { data: appeal } = useGetAppealQuery({ uuid });

  return <MainLayout>{JSON.stringify(appeal)}</MainLayout>;
}
