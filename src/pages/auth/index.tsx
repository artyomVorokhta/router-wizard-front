import { Grid } from '@mui/material';

import { useSignInMutation } from 'store/api/authApi';

import { AuthLayout } from 'layouts/auth/Auth';

import { SignInForm } from 'components/auth/form/sign-in/SignIn';
import { AuthInfo } from 'components/auth/info/Info';
import { useAppNavigation } from 'components/navigation';

import { NotificationType } from 'types/common/notification';
import { SignInDto } from 'types/dto/auth/sign-in.dto';

import { dispatchNotification } from 'packages/EventBus';
import { getErrorMessage } from 'utils/errorUtil';

import sx from './Auth.styles';

export default function Auth() {
  const { goToMain } = useAppNavigation();

  const [fetchSignIn, { isLoading }] = useSignInMutation();

  const signIn = async (data: SignInDto) => {
    try {
      await fetchSignIn(data).unwrap();

      goToMain();
    } catch (e) {
      const message = getErrorMessage(e);

      dispatchNotification(message, { type: NotificationType.DANGER });
    }
  };

  return (
    <AuthLayout>
      <Grid container sx={sx.wrapper}>
        <Grid item xs={12} sm={6} md={5} sx={sx.info}>
          <AuthInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={5} sx={sx.form}>
          <SignInForm isLoading={isLoading} onSubmit={signIn} />
        </Grid>
      </Grid>
    </AuthLayout>
  );
}
