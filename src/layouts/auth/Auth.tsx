import { ReactNode } from 'react';

import { PublicLayout } from 'layouts/public/Public';

import { Box } from 'components/ui/box/Box';

const sx = {
  layout: {
    padding: {
      xs: '20px 0',
    },
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    width: 'calc(100% - 20px)',
  },
};

export interface AuthLayoutProps {
  children?: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <PublicLayout>
      <Box sx={sx.layout}>
        <Box sx={sx.container}>{children}</Box>
      </Box>
    </PublicLayout>
  );
}
