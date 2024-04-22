import React, { useState } from 'react'
import { Box, Avatar, IconButton, Stack, TextField, Tooltip, Popover, Typography } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    avtar: {
        background: '#666ebf !important', width: 35, height: 35
    },
    iconSize: {
        fontSize: 50
    },
}));

const MessageSendBox = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <TextField
                name="message"
                placeholder='What is the job title or topic of discussion?'
                size='small'
                fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                <IconButton>
                    <Avatar className={classes.avtar}>
                        <SendOutlinedIcon className={classes.iconSize} />
                    </Avatar>
                </IconButton>
                <IconButton
                    aria-owns={open ? 'mouse-over-popover-1' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <Avatar className={classes.avtar}>
                        <MicOutlinedIcon className={classes.iconSize} />
                    </Avatar>
                </IconButton>
                <IconButton sx={{ pr: 0 }}>
                    <Avatar className={classes.avtar}>
                        <PhoneOutlinedIcon className={classes.iconSize} />
                    </Avatar>
                </IconButton>
            </Box>

            <Popover
                id="mouse-over-popover-1"
                sx={{
                    pointerEvents: 'none',
                    boxShadow: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
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
                <Typography variant='body2' sx={{ p: 1, background: '#f1f1f1' }}>You can type or Turn On Microphone for Live Answers</Typography>
            </Popover>
        </Box >
    )
}

export default MessageSendBox