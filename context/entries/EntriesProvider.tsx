import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './index';

export interface EntriesState {
  entries: Entry[];
}
//este es el estado
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    // {
    //   _id: uuidv4(),
    //   description: 'Pendiente: lorem ipsum',
    //   status: 'pending',
    //   createdAT: Date.now(),
    // },
    // {
    //   _id: uuidv4(),
    //   description: 'En-Progreso: lorem ipsum lorum',
    //   status: ' in-progress',
    //   createdAT: Date.now() - 1000000,
    // },
    // {
    //   _id: uuidv4(),
    //   description: 'completado:  ipsum asdasdas ',
    //   status: 'finished',
    //   createdAT: Date.now() - 100000,
    // },
  ],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: description,
      createdAT: Date.now(),
      status: 'pending',
    };
    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,

        updateEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
