import React from 'react';
import Container from '@material-ui/core/Container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';

export default function Confirmation() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={12} xl={12}>
            <CheckCircleIcon />
            <p>
              Thankyou
            </p>
          </Grid>
        </Grid>
      </Container>

    </React.Fragment>
  );
}