import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const footer = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    padding: '10px 0px'
}

const Footer = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={footer}>
                <Typography>&copy; {new Date().getFullYear()} LiveCaller</Typography>
            </Box>
        </Container>
    );
}

export default Footer;