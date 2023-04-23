import { useCreateUserMutation } from 'store/api/userApi';

import { MainLayout } from 'layouts/main/Main';

import { useAppNavigation } from 'components/navigation';
import { UserBasicForm, UserBasicFormDto } from 'components/user/form/basic/BasicForm';

import { NotificationType } from 'types/common/notification';
import { UserCreateDto } from 'types/dto/user/create.dto';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

export default function UserCreate() {
  const { goToUsers } = useAppNavigation();

  const [fetchCreateUser] = useCreateUserMutation();

  const createUser = async (data: UserBasicFormDto) => {
    try {
      await fetchCreateUser(data as UserCreateDto);

      dispatchNotification('Пользователь создан');

      goToUsers();
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <MainLayout>
      <UserBasicForm onSubmit={createUser} />
    </MainLayout>
  );
}
