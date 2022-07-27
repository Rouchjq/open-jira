import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  // methods
  closeSideMenu: () => void;
  openSideMenu: () => void;

  setIsAddingEntry: (isAddingEntry: boolean) => void;

  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
