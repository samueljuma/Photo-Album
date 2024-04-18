import React from "react";
import { Typography, Grid, Toolbar, Container, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { styled } from '@mui/material/styles';

// Styled main component
const Main = styled('main')({
  marginTop: '20px',
  padding: '20px 0',
});

// Styled div component
const CustomDiv = styled('div')({
  padding: '20px',
  borderRadius: '5px',
});

// Styled Grid component
const StyledGrid = styled(Grid)({
  textAlign: 'center',
});

// Styled Button component
const StyledButton = styled(Button)({
  borderRadius: '10px',
});

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
              {/* First button takes full width on xs and divides into half width on sm and larger */}
              <Grid item xs={12} sm={6}>
                <StyledButton variant="contained" color="primary" fullWidth>
                  See My Photos
                </StyledButton>
              </Grid>
              {/* Second button takes full width on xs and divides into half width on sm and larger */}
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
