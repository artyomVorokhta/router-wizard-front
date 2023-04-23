import { useCreateAppealMutation } from 'store/api/appealApi';

import { MainLayout } from 'layouts/main/Main';

import { AppealBasicForm, AppealBasicFormDto } from 'components/appeal/form/basic/BasicForm';
import { useAppNavigation } from 'components/navigation';

import { NotificationType } from 'types/common/notification';
import { AppealCreateDto } from 'types/dto/appeal/create.dto';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

export default function AppealCreate() {
  const { goToAppeals } = useAppNavigation();

  const [fetchCreateAppeal] = useCreateAppealMutation();

  const createAppeal = async (data: AppealBasicFormDto) => {
    try {
      await fetchCreateAppeal(data as AppealCreateDto);

      dispatchNotification('Заявка создана');

      goToAppeals();
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <MainLayout>
      <AppealBasicForm onSubmit={createAppeal} />
    </MainLayout>
  );
}
