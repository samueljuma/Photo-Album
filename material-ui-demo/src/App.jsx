import React from "react";
import { Typography, Grid, Toolbar, Container, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'



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
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Gallery
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Welcome to our photo gallery! Discover stunning images capturing life's moments, from breathtaking landscapes to intimate portraits. Let these visuals inspire and transport you. Enjoy your journey!
                        </Typography>
                        <div>
                            <Grid container spacing={4} justifyContent="center" alignItems="center">
                                {/* First button takes full width on xs and divides into half width on sm and larger */}
                                <Grid item xs={12} sm={6}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        See My Photos
                                    </Button>
                                </Grid>

                                {/* Second button takes full width on xs and divides into half width on sm and larger */}
                                <Grid item xs={12} sm={6}>
                                    <Button variant="outlined" color="primary" fullWidth>
                                        Click Me
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>
        </>
    );
}

export default App;