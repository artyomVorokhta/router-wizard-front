import { useGetUserQuery, useUpdateUserMutation } from 'store/api/userApi';

import { MainLayout } from 'layouts/main/Main';

import { useAppNavigation } from 'components/navigation';
import { UserBasicForm, UserBasicFormDto } from 'components/user/form/basic/BasicForm';

import { NotificationType } from 'types/common/notification';
import { UserUpdateDto } from 'types/dto/user/update.dto';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

export default function User() {
  const {
    query: { uuid: queryUuid },
    goToUsers,
  } = useAppNavigation();

  const uuid = String(queryUuid) || '';

  const { data: user } = useGetUserQuery({ uuid });

  const [fetchUpdateUser] = useUpdateUserMutation();

  if (!user) {
    return null;
  }

  const { name, email, phone, role } = user;

  const defaultValues: UserBasicFormDto = {
    name,
    email,
    phone,
    role,
  };

  const updateUser = async (data: UserBasicFormDto) => {
    try {
      await fetchUpdateUser(data as UserUpdateDto);

      dispatchNotification('Пользователь обновлён');

      goToUsers();
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <MainLayout>
      <UserBasicForm defaultValues={defaultValues} onSubmit={updateUser} />
    </MainLayout>
  );
}
