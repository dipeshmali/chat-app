import React from 'react'
import { Avatar, Box, Card, CardHeader, Divider, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import MessageSendBox from '../MessageSendBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PerfectScrollbar from 'react-perfect-scrollbar'

const UserChatBox = ({ title, userPic = null, subText, action, children }) => {
    return (
        <Card sx={{ padding: "16px 24px", boxShadow: "0px 2px 4px 0px #00000040" }}>
            <CardHeader
                avatar={
                    userPic ?
                        <Avatar src={userPic} alt='userPic' />
                        :
                        <Avatar sx={{ background: '#666ebf' }} alt='userPic' >
                            <AccountCircleIcon sx={{ fill: '#adc7ef', fontSize: 40 }} />
                        </Avatar>
                }
                action={action && action}
                title={<Typography sx={{ fontWeight: 'bold', color: '#565a5e' }}>{title}</Typography>}
                subheader={<Typography sx={{ color: '#2cd6d6' }}>{subText}</Typography>}
                sx={{ p: 0 }}
            />
            <Divider sx={{ mb: 1, mt: 1 }} />
            <PerfectScrollbar>
                <Box sx={{ minHeight: "calc(100vh - 350px)", maxHeight: "calc(100vh - 350px)", width: 'calc(100% - 16px)' }} >
                    {children}
                </Box>
            </PerfectScrollbar>
            <Divider sx={{ mb: 1, mt: 1 }} />
            <MessageSendBox />
        </Card>
    )
}

export default UserChatBox