import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LiveCallerInfo = (props) => {
    const { navigationPath, btnName } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigationPath)
    }

    return (
        <Box mt={4}>
            <Typography variant='h5' fontWeight={'bold'}>
                Al-Assisted Job Preparation and Live Help
            </Typography>
            <ul style={{ marginLeft: '-20px' }}>
                <li>
                    <Typography>Post Job Description to See Expected Questions with Answers</Typography>
                </li>
                <li>
                    <Typography>Get Live Help During the intensio</Typography>
                </li>
                <li>
                    <Typography>An AI Bot can stay with you and assist you through your interview call or meeting</Typography>
                </li>
                <li>
                    <Typography>Add AI Bot to your call so you can see the Live Insights on the topic beign discussed</Typography>
                </li>
            </ul>
            <Button variant='contained' color='success' onClick={() => handleClick()}>{btnName}</Button>
        </Box>
    )
}

export default LiveCallerInfo