import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeatherIcon from 'feather-icons-react';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ backgroundColor: '#fff', flexGrow: 1 }}>
            <AppBar position="static" color='transparent' sx={{ boxShadow: "0px 2px 4px 0px #00000040", padding: "0px" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleClick()}>
                        <AdbIcon sx={{ fontSize: 30 }} />
                        <Typography variant='h6' component='h6' sx={{ fontWeight: 'bold' }}>
                            LiveCaller
                        </Typography>
                    </Box>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} className='textColor'>
                            <FeatherIcon icon='package' />
                            <Typography ml={1} >Pricing</Typography>
                        </Box>
                        <Tooltip>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} disableRipple>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {/* <AccountCircleIcon sx={{ fontSize: 40 }} /> */}
                                    <IconButton>
                                        <Avatar sx={{ background: '#666ebf' }}>
                                            <AccountCircleIcon sx={{ fill: '#adc7ef', fontSize: 40 }} />
                                        </Avatar>
                                    </IconButton>

                                    <Typography ml={0.5} className='textColor'>
                                        Login / Register
                                    </Typography>
                                </Box>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Header;