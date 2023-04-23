import { useGetAppealQuery, useUpdateAppealMutation } from 'store/api/appealApi';

import { MainLayout } from 'layouts/main/Main';

import { AppealBasicForm, AppealBasicFormDto } from 'components/appeal/form/basic/BasicForm';
import { useAppNavigation } from 'components/navigation';

import { NotificationType } from 'types/common/notification';
import { AppealUpdateDto } from 'types/dto/appeal/update.dto';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

export default function Appeal() {
  const {
    query: { uuid: queryUuid },
    goToAppeals,
  } = useAppNavigation();

  const uuid = String(queryUuid) || '';

  const { data: appeal } = useGetAppealQuery({ uuid });

  const [fetchUpdateAppeal] = useUpdateAppealMutation();

  if (!appeal) {
    return null;
  }

  const {
    client: { name, email, phone, router },
    status,
  } = appeal;

  const defaultValues: AppealBasicFormDto = {
    name,
    email,
    phone,
    router,
    status,
  };

  const updateAppeal = async (data: AppealBasicFormDto) => {
    try {
      await fetchUpdateAppeal(data as AppealUpdateDto);

      dispatchNotification('Заявка обновлена');

      goToAppeals();
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <MainLayout>
      <AppealBasicForm defaultValues={defaultValues} onSubmit={updateAppeal} />
    </MainLayout>
  );
}
