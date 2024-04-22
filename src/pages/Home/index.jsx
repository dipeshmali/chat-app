import React, { useState } from 'react'
import { Button, Box, Grid, Stack, Typography, IconButton, Tooltip, Avatar, Popover, } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UserChatBox from '../../components/UserChatBox'
import LiveCallerInfo from '../../components/LiveCallerInfo/indes';
import PopoverContent from '../../components/PopoverContent';

const Home = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Grid container spacing={4} mt={0.5}>
            <Grid item xs={12} md={3}>
                <LiveCallerInfo navigationPath="/sample-chat" btnName="Get Started" />
            </Grid>
            <Grid item xs={12} md={9}>
                <UserChatBox
                    title="My First Meeting"
                    subText="Sat Jan 12 10.00 AM"
                    action={
                        <Stack direction={'row'}>
                            {/* <Tooltip title="Post a job description for better answers"> */}
                            <IconButton
                                aria-label="settings"
                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            >
                                <Avatar sx={{ background: '#adc7ef', width: 35, height: 35 }}>
                                    <TextSnippetIcon sx={{ stroke: '#fff', fill: '#666ebf' }} />
                                </Avatar>
                            </IconButton>
                            {/* </Tooltip> */}
                            <IconButton aria-label="settings">
                                <Avatar sx={{ background: '#b8f7a5', width: 35, height: 35 }}>
                                    <SaveIcon sx={{ stroke: '#fff', fill: '#4db52d' }} />
                                </Avatar>
                            </IconButton>
                        </Stack>
                    }
                >

                    {/** chat goes here */}

                </UserChatBox>
            </Grid>

            <Popover
                id="mouse-over-popover"
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
                <Typography variant='body2' sx={{ p: 1, background: '#f1f1f1' }}>Post a job description for better answers</Typography>
            </Popover>
        </Grid>
    )
}

export default Home