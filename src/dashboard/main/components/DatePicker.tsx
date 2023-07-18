import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker() {
    const [value, setValue] = React.useState(dayjs()); // Set the initial value to the current date
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']} >
          <DatePicker
            label="Date"
            format="MM-DD-YYYY"
            onChange={(newDate) => setValue(newDate || dayjs())}
            value={value}
          />
        </DemoContainer>
      </LocalizationProvider>
    );
  }
  