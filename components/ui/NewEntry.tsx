import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  // Estado de la UI agregar entradas
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  // Estado de las entradas. Obtenido del contexto de las entradas
  const { addNewEntry } = useContext(EntriesContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
    addNewEntry(inputValue);
    setInputValue('');
    setTouched(false);
    setIsAddingEntry(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='...'
            autoFocus
            multiline
            label='Nueva Entrada'
            helperText={
              inputValue.length <= 0 && touched && 'Ingrese una entrada'
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={handleChange}
            // Funcion pa saber cuando pierde el foco el input
            onBlur={() => setTouched(true)}
          />

          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='text'
              color='error'
              endIcon={<CancelOutlinedIcon />}
              onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}>
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAddingEntry(true)}>
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
