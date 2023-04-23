import { defaultAppeals } from 'mocks/appeal';

import { useGetAppealListQuery } from 'store/api/appealApi';

import { MainLayout } from 'layouts/main/Main';

import { AppealTable } from 'components/appeal/table/Table';

export default function AppealList() {
  const { data: appeals = defaultAppeals } = useGetAppealListQuery({});

  const changeStatus = () => ({});

  const editAppeal = () => ({});

  const deleteAppeal = () => ({});

  return (
    <MainLayout>
      <AppealTable appeals={appeals} onStatus={changeStatus} onEdit={editAppeal} onDelete={deleteAppeal} />
    </MainLayout>
  );
}
