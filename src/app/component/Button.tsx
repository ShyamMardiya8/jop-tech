import { Button } from '@mui/material'
import React from 'react'

interface btnVariant{
    variant?: 'text' | 'outlined' | 'contained',
    label?: string
}

const Btn = ({variant, label} : btnVariant) => {
  return (
    <>
    <Button variant={variant} >
        {label}
    </Button>
    </>
  )
}

export default Btn