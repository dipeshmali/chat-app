import React, { useState } from 'react'
import { Box, Grid, Stack, Typography, IconButton, Tooltip, Avatar, Badge, Card, Paper } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UserChatBox from '../../components/UserChatBox'
import MessageContent from '../../components/MessageContent';
import { SAMPLE_CHAT, SAMPLE_CHAT_HISTORY_OF_USERS } from '../../mockdata/constant';
import SmsIcon from '@mui/icons-material/Sms';

import ChatUsers from '../../components/ChatUsers';

const ChatPanel = () => {

    const [activeUser, setActiveUser] = useState(null);
    const [chatHistory, setChatHostory] = useState([]);

    const getUserChat = (user) => {
        setActiveUser(user)
        const chatHistory = SAMPLE_CHAT_HISTORY_OF_USERS?.find(usersChat => usersChat?.userId === user?.id);
        setChatHostory(chatHistory?.chat)
    }

    return (
        <Grid container spacing={4} mt={0.5}>
            <Grid item xs={12} md={3}>
                <Stack direction={'row'} spacing={0.3} alignItems={'center'}>
                    <Paper elevation={0} sx={{ padding: "16px 24px", width: "100%" }}>
                        <Typography display={'flex'} alignItems={'center'} sx={{ fontSize: '16px', fontWeight: 'bold', color: '#666ebf' }}>
                            <SmsIcon sx={{ mr: 0.5 }} /> My Logs <Badge sx={{ ml: 2 }} badgeContent={32} color="primary" />
                        </Typography>
                    </Paper>
                    <Paper elevation={0} sx={{ padding: "16px 24px", width: "100%" }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: '#595959' }}>
                            Archieved <Badge badgeContent={8} color="secondary" sx={{ ml: 1 }} />
                        </Typography>
                    </Paper>
                </Stack>
                <ChatUsers getUserChat={getUserChat} activeUserId={activeUser?.id} />
            </Grid>
            <Grid item xs={12} md={9}>
                <UserChatBox
                    title={activeUser?.userName}
                    subText={activeUser?.time}
                    userPic={activeUser?.userProfile}
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
                    {chatHistory?.length > 0 ? chatHistory?.map((item, index) =>
                        <MessageContent
                            key={index}
                            item={item}
                        />
                    ) :
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: "14px", fontWeight: 'bold', color: '#565a5e',
                                pt: '12%'
                            }}
                        >
                            No Chat has been initiated yet!<br />
                            Please feel free to ask whatever you want i am here to assist you.
                        </Typography>
                    }
                </UserChatBox>
            </Grid>
        </Grid >
    )
}

export default ChatPanel