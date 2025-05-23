// src/components/PhoneInput.tsx
import React, { useState } from 'react';
import { TextField, MenuItem, InputAdornment, Select, SelectChangeEvent } from '@mui/material';
import { Country } from '../types/country';
import { countries } from '../constant/constant';

const Phone = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phone, setPhone] = useState('');

  const handleCountryChange = (e: SelectChangeEvent) => {
    const country = countries.find(c => c.code === e.target.value);
    if (country) setSelectedCountry(country);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder={selectedCountry.format}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={selectedCountry.code}
              onChange={handleCountryChange}
              variant="standard"
              disableUnderline
              className="min-w-[80px]"
              sx={{
                '.MuiSelect-select': {
                  paddingLeft: 0,
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.flag} {country.dialCode}
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Phone;
