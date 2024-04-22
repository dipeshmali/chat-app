import { Popover } from '@mui/material'
import React from 'react'

const PopoverContent = ({ popoverId, open, anchorElement, title, handlePopoverClose }) => {
    return (
        <Popover
            id={popoverId}
            sx={{
                pointerEvents: 'none',
                boxShadow: 'none',
            }}
            open={open}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <Typography variant='body2' sx={{ p: 1, background: '#f1f1f1' }}>{title}</Typography>
        </Popover>
    )
}

export default PopoverContent