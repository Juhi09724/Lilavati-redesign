import React from 'react';
import Container from '@material-ui/core/Container';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import SimplePaper from '../Components/Paper';
import RecipeReviewCard from '../Components/Card';
import TextMobileStepper from '../Components/ImageCarousel';
import IconLabelButtons from '../Components/ButtonLabel';
import SpacingGrid from '../Components/GridSimple';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';




export default function Home() {
  
  return (
    <React.Fragment>
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={12} xl={12}>
          <RecipeReviewCard />
          <TextMobileStepper />
          <IconLabelButtons />
        </Grid>
      </Grid>
    </Container>
  </React.Fragment>
   );
  }