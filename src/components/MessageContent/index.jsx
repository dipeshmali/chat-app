import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const propsData2 = {
    message: 'What evaluation metrics would you use a classification problem?',
    isSender: false,
    type: 'mic',
    userProfile: 'https://mui.com/static/images/avatar/1.jpg',
    userName: 'Speaker 1',
}

const propsData = {
    message: 'For a classification problem, common evaluation metrics include accuracy, precision, recall, F1 score, and ROC-AUC.',
    isSender: true,
    type: 'boat',
    userProfile: 'https://mui.com/static/images/avatar/1.jpg',
    userName: 'AI Bot',
    isLoginUser: false
}

const MessageContent = (props) => {
    const { item: { message, isSender, type, userProfile, userName, isLoginUser }, key } = props;
    // const { message, isSender, type, userProfile, userName, isLoginUser } = propsData;

    const iconMapper = {
        'mic': <MicOutlinedIcon fontSize='15px' />,
        'boat': <PhoneOutlinedIcon fontSize='15px' />
    }

    return (
        <Box key={key} mt={1}>
            <Stack direction={'row'} spacing={1} justifyContent={!isSender ? 'flex-start' : 'flex-end'}>
                {!isSender ?
                    <>
                        <Avatar src={userProfile} alt='user' />
                        <Box sx={{ padding: 1, maxWidth: '60%', background: !isSender ? '#f2f2f2' : (isSender && !isLoginUser) ? '#afd2f1' : '#666ebf', borderRadius: '5px' }}>
                            <Typography>{message}</Typography>
                        </Box>
                    </> :
                    <>
                        <Box sx={{ padding: 1, maxWidth: '60%', background: !isSender ? '#f2f2f2' : (isSender && !isLoginUser) ? '#afd2f1' : '#666ebf', borderRadius: '5px' }}>
                            <Typography>{message}</Typography>
                        </Box>
                        <Avatar src={userProfile} alt='user' />
                    </>
                }
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={!isSender ? 'flex-start' : 'flex-end'} ml={!isSender ? 6 : 0} mr={isSender ? 6 : 0}>
                <>
                    {type && iconMapper[type]}
                    {userName && <Typography variant='subtitle2'>{userName}</Typography>}
                </>
            </Stack>
        </Box>
    )
}

export default MessageContent