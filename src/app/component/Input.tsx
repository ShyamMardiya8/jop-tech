import { TextField } from '@mui/material'
import React from 'react'

const Input = ({type, label, name, variant} : any) => {
  return (
    <>
    <TextField
          label={label}
          type={type}
          variant={variant}
          name={name}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
    </>
  )
}

export default Input