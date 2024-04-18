import React from "react";
import { Typography, Grid, Toolbar, Container, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';
import styles from './styles';

const App = () => {
    const {
        Main,
        CustomDiv,
        StyledGrid,
        StyledButton,
        StyledContainer,
        StyledCard,
        StyledCardMedia,
        StyledCardContent,
    } = styles; // Destructure styles object

    const cards = Array.from({ length: 20}, (_, index) => ({
        id: index,
        image: `https://source.unsplash.com/random?sig=${index}`,
        title: `Image Title ${index + 1}`,
        description: `Description of image ${index + 1}`,
    }));

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <PhotoCamera fontSize="large" sx={{ marginRight: 2 }} />
                    <Typography variant="h6"> Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <Main>
                <CustomDiv>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Gallery
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Welcome to our photo gallery! Discover stunning images capturing life's moments, from breathtaking landscapes to intimate portraits. Let these visuals inspire and transport you. Enjoy your journey!
                        </Typography>
                        <StyledGrid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <StyledButton variant="contained" color="primary" fullWidth>
                                    See My Photos
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledButton variant="outlined" color="primary" fullWidth>
                                    Click Me
                                </StyledButton>
                            </Grid>
                        </StyledGrid>
                    </Container>
                </CustomDiv>

                {/* <StyledContainer> */}
                    <StyledGrid container spacing={2}>
                        {cards.map((card) => (
                            <StyledGrid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                                <StyledCard border="5px solid" borderColor="primary">
                                    <StyledCardMedia
                                        image={card.image}
                                        title={card.title}
                                    />
                                    <StyledCardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                    </StyledCardContent>
                                    <CardActions>
                                        <StyledButton size="small" color="primary" fullWidth>View</StyledButton>
                                        <StyledButton size="small" color="primary" fullWidth>Edit</StyledButton>
                                    </CardActions>
                                </StyledCard>
                            </StyledGrid>
                        ))}

                    </StyledGrid>
                {/* </StyledContainer> */}

            </Main>
        </>
    );
}

export default App;
