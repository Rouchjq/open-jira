import { createContext } from 'react';
import { Entry } from '../../interfaces';
//esto es lo que el contexto exporta a sus hijos
interface ContextProps {
  entries: Entry[]; //todo: falta el tipo de dato del arreglo

  // Methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
