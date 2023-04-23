import { defaultUsers } from 'mocks/user';

import { useDeleteUserMutation, useGetUserListQuery } from 'store/api/userApi';

import { MainLayout } from 'layouts/main/Main';

import { useAppNavigation } from 'components/navigation';
import { UserTable } from 'components/user/table/Table';

import { NotificationType } from 'types/common/notification';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

export default function UserList() {
  const { goToUsers } = useAppNavigation();

  const { data: users = defaultUsers } = useGetUserListQuery({});

  const [fetchDeleteUser] = useDeleteUserMutation();

  const deleteUser = async (uuid: string) => {
    try {
      await fetchDeleteUser(uuid);
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <MainLayout>
      <UserTable users={users} onDelete={deleteUser} onPerson={goToUsers} />
    </MainLayout>
  );
}
