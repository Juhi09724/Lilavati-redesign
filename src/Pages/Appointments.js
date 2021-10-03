import React from 'react';
import Container from '@material-ui/core/Container';
import IconLabelButtons from '../Components/ButtonLabel';
import Grid from '@material-ui/core/Grid';

export default function Appointments() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={12} xl={12}>
            <IconLabelButtons />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}