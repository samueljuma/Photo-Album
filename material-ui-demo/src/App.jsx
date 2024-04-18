import React from "react";
import { Typography, Grid, Toolbar, Container, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { Main, CustomDiv, StyledGrid, StyledButton } from './styles';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
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
                                    Secondary Action
                                </StyledButton>
                            </Grid>
                        </StyledGrid>
                    </Container>
                </CustomDiv>
            </Main>
        </>
    );
}

export default App;
