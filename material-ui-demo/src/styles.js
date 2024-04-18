import { styled } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';

// Create and export styled components as an object
const styles = {
    
    Main: styled('main')({
        marginTop: '20px',
        padding: '20px 0',
    }),

    CustomDiv: styled('div')({
        padding: '20px',
        borderRadius: '5px',
    }),

    StyledGrid: styled(Grid)({
        textAlign: 'center',
    }),

    StyledButton: styled(Button)({
        borderRadius: '10px',
    }),
};

export default styles;
