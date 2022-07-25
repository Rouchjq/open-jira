import { FC, useContext, useMemo } from 'react';

import { List, Paper } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  //useMemo Es una funcion que regresa un valor y lo guarda, cada que cambien la dependencia que esta vigilando en este caso -> [entries]
  const entryByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    //Todo: aqui haremos drop
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          backgroundColor: 'transparent',
          padding: '5px 10px',
          overflow: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {/* //TODO: Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {entryByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
