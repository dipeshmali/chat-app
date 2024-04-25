import React from 'react'
import { Button, Box, Grid, Stack, Typography, IconButton, Tooltip, Avatar, } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UserChatBox from '../../components/UserChatBox'
import MessageContent from '../../components/MessageContent';
import { SAMPLE_CHAT } from '../../mockdata/constant';
import LiveCallerInfo from '../../components/LiveCallerInfo/indes';

const SampleChat = () => {
    return (
        <Grid container spacing={4} mt={0.5}>
            <Grid item xs={12} md={3}>
                <LiveCallerInfo navigationPath="/chat" btnName="Open Chat Panel" />
            </Grid>
            <Grid item xs={12} md={9}>
                <UserChatBox
                    title="SantinelCo. Job Interview"
                    subText="Sat Jan 12 10.00 AM"
                    action={
                        <Stack direction={'row'}>
                            <IconButton aria-label="settings">
                                <Avatar sx={{ background: '#adc7ef', width: 35, height: 35 }}>
                                    <TextSnippetIcon sx={{ stroke: '#fff', fill: '#666ebf' }} />
                                </Avatar>
                            </IconButton>
                            <IconButton aria-label="settings">
                                <Avatar sx={{ background: '#b8f7a5', width: 35, height: 35 }}>
                                    <SaveIcon sx={{ stroke: '#fff', fill: '#4db52d' }} />
                                </Avatar>
                            </IconButton>
                        </Stack>
                    }
                >
                    {SAMPLE_CHAT?.map((item, index) =>
                        <MessageContent
                            key={index}
                            item={item}
                        />
                    )}
                </UserChatBox>
            </Grid>
        </Grid>
    )
}

export default SampleChat