import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from "./Images/memories.png";

const App = () => {
    return (
     <Container maxWidth="lg">

        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">
                Portraits
            </Typography>
            <img src={memories} alt="portraits" height="60" />
        </AppBar>

     </Container>
    )
}

export default App;