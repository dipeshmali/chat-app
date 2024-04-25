import React, { useCallback, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Badge, Box, Card, InputAdornment, TextField } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { CHAT_USERS_LIST } from '../../mockdata/constant';
import { debounce } from '../../util';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none', // Remove the border
            },
            '&:hover fieldset': {
                border: 'none', // Remove the border on hover
            },
            '&.Mui-focused fieldset': {
                border: 'none', // Remove the border when focused
            },
        },
    },
    listItem: {
        '&:hover': {
            background: '#a8aff9'
        }
    },
    badge: {
        // position: 'absolute',
        // top: '35px'
    },
});

const ChatUsers = ({ getUserChat, activeUserId }) => {
    const classes = useStyles();
    const [chatUsers, setChatUsersList] = useState(CHAT_USERS_LIST);
    const [filterChatUsers, setFilterChatUsers] = useState(CHAT_USERS_LIST);
    const [hasNoRecords, SetHasNoRecords] = useState(false);

    const handlSearch = useCallback(debounce((event) => {
        let val = event.target.value;
        if (val?.trim().length) {
            const filterResult = chatUsers?.filter(user => user?.userName?.toLocaleLowerCase().indexOf(val?.toLocaleLowerCase()) !== -1)
            if (filterResult?.length === 0) {
                SetHasNoRecords(true)
            } else {
                SetHasNoRecords(false)
            }
            setFilterChatUsers(filterResult)
        } else {
            SetHasNoRecords(false)
            setFilterChatUsers(chatUsers)
        }
    }), []);

    useEffect(() => {
        getUserChat(CHAT_USERS_LIST[0])
    }, [])

    return (
        <React.Fragment>
            <Box>
                <TextField
                    name='serach'
                    className={classes.root}
                    fullWidth
                    sx={{ border: 'none' }}
                    placeholder="What're you serching for?"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    onChange={handlSearch}
                />
            </Box>
            <Card sx={{ boxShadow: "0px 2px 4px 0px #00000040" }}>
                {hasNoRecords ?
                    <Typography sx={{ fontSize: "14px", fontWeight: 'bold', color: '#565a5e', padding: 2 }}>
                        Oops! No User Found
                    </Typography>
                    :
                    <PerfectScrollbar>
                        <Box sx={{ minHeight: "calc(100vh - 290px)", maxHeight: "calc(100vh - 290px)" }}>
                            <List sx={{ p: 0 }}>
                                {filterChatUsers?.map((user, index) => {
                                    return (
                                        <Box key={index} sx={{ cursor: 'pointer', backgroundColor: activeUserId === user?.id ? '#a8aff9' : '' }} className={classes.listItem} onClick={() => getUserChat(user)}>
                                            <ListItem alignItems="flex-start" sx={{ m: 0 }}>
                                                <ListItemAvatar sx={{ position: 'relative' }}>
                                                    <Avatar alt="Remy Sharp" src={user?.userProfile} />
                                                    <Badge
                                                        overlap="circular"
                                                        variant="dot"
                                                        color="primary"
                                                        badgeContent=" "
                                                        className={classes.badge}
                                                        sx={{ position: 'absolute', bottom: 5, right: 20 }}
                                                    />


                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<Typography sx={{ fontSize: "14px", fontWeight: 'bold', color: '#565a5e' }}>{user?.userName}</Typography>}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                            >
                                                                {user?.time}
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                            {filterChatUsers?.length - 1 !== index &&
                                                <Divider variant="fullWidth" />
                                            }
                                        </Box>
                                    )
                                })
                                }
                            </List>
                        </Box>
                    </PerfectScrollbar>
                }
            </Card>
        </React.Fragment>
    );
}

export default ChatUsers;