import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#666ebf',
            contrastText: '#fff',
        },
        secondary: {
            main: '#595959',
            contrastText: '#fff',
        },
        success: {
            main: '#0faa0b',
            contrastText: '#fff',
        },

    }
});

export default theme;