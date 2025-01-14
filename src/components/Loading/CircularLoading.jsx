import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const CircularLoading = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
        }}>
            <CircularProgress size='2rem' />
        </Box>
    )
}

export default CircularLoading