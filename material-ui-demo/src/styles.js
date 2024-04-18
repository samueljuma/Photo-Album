import { styled } from '@mui/material/styles';
import { Grid, Button, Card, CardContent, CardMedia, Container } from '@mui/material';

// Create and export styled components as an object
const styles = {
    Main: styled('main')({
        marginTop: '20px',
        padding: '20px 20px',
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

    StyledContainer: styled(Container)({
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#ff34ff',
        borderRadius: '10px',
    }),

    StyledCard: styled(Card)({
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        overflow: 'hidden',
    }),

    StyledCardMedia: styled(CardMedia)({
        height: '200px',
    }),

    StyledCardContent: styled(CardContent)({
        padding: '16px',
    }),
};

export default styles;
