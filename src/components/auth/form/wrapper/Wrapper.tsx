import { ReactNode } from 'react';

import { Paper } from 'components/ui/paper/Paper';
import { Typography } from 'components/ui/typography/Typography';

import sx from './Wrapper.styles';

type AuthFormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function AuthFormWrapper({ title, children }: AuthFormWrapperProps) {
  return (
    <Paper sx={sx.wrapper}>
      <Typography variant='h5'>{title}</Typography>

      {children}
    </Paper>
  );
}
