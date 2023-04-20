import { NextRouter } from 'next/router';
import React, { useContext } from 'react';

export type Navigation = Pick<NextRouter, 'pathname' | 'query' | 'isReady'> & {
  changeChapter: (path: string, checkPaths?: boolean) => void;
  goBack: () => void;
  goToMain: () => void;
  goToAuth: () => void;
  goToUsers: (uuid?: string) => void;
  goToAppeals: (uuid?: string) => void;
};

export const AppNavigationCtx = React.createContext({} as Navigation);

const useAppNavigation = () => {
  const appNavigation = useContext(AppNavigationCtx);

  if (typeof appNavigation === 'undefined') {
    throw Error('Use useAppNavigation() inside <NavigationProvider>');
  }

  return appNavigation;
};

export default useAppNavigation;
