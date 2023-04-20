import { ReactNode, useState } from 'react';

import { Grid } from '@mui/material';

import { useSignOutMutation } from 'store/api/authApi';
import { selectCurrentUser } from 'store/selectors/authSelector';

import { PrivateLayout } from 'layouts/private/Private';

import { useAppNavigation } from 'components/navigation';
import { Sidebar } from 'components/sidebar/Sidebar';

import { NotificationType } from 'types/common/notification';
import { Option } from 'types/common/option';

import { Path } from 'constants/paths';
import { useAppSelector } from 'hooks/store';
import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

import sx from './Main.styles';

const options: Option[] = [
  { label: 'Профиль', value: Path.PROFILE },
  { label: 'Пользователи', value: Path.USERS },
  { label: 'Заявки', value: Path.APPEALS },
  { label: 'Выход', value: Path.SIGN_OUT },
];

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [selected, setSelected] = useState<string>('');

  const currentUser = useAppSelector(selectCurrentUser);

  const [fetchSignOut] = useSignOutMutation();

  const { goToAuth, goToUsers, goToAppeals } = useAppNavigation();

  const signOut = async () => {
    try {
      await fetchSignOut();

      goToAuth();
    } catch (error) {
      const message = getErrorMessage(error);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  const performOption = async (value: Option['value']) => {
    switch (value) {
      case Path.PROFILE:
        goToUsers(currentUser?.uuid);
        break;

      case Path.USERS:
        goToUsers();
        break;

      case Path.APPEALS:
        goToAppeals();
        break;

      case Path.SIGN_OUT:
        signOut();
        break;

      default:
        break;
    }
  };

  return (
    <PrivateLayout>
      <Grid container sx={sx.layout}>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <Sidebar options={options} onOptionClick={performOption} selected={selected} />
        </Grid>

        <Grid item lg={10} md={9} sm={8} xs={12} sx={sx.content}>
          {children}
        </Grid>
      </Grid>
    </PrivateLayout>
  );
}
