import { createContext } from 'react';

interface ContextProps {
  closeSideMenu: () => void;
  openSideMenu: () => void;
  sidemenuOpen: boolean;
}

export const UIContext = createContext({} as ContextProps);
