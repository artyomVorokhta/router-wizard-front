import { useGetCurrentUserQuery } from 'store/api/currentUserApi';
import { selectIsAuth } from 'store/selectors/authSelector';

import { useAppNavigation } from 'components/navigation';
import Loader from 'components/ui/loader/Loader';

import { useAppSelector } from 'hooks/store';

type Props = {
  children: JSX.Element;
};

export function PrivateLayout({ children }: Props): JSX.Element {
  const { isLoading, isError } = useGetCurrentUserQuery();
  const { goToAuth } = useAppNavigation();

  const isAuth = useAppSelector(selectIsAuth);
  if (isLoading) return <Loader width='58px' />; // TODO: show loader

  // if (isError || !isAuth) {
  //   goToAuth();
  //   // eslint-disable-next-line react/jsx-no-useless-fragment
  //   return <></>;
  // }

  return children;
}
