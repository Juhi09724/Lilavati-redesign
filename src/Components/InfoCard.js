import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DisableElevation12 from './ReqAppBt2';
import Grid from '@material-ui/core/Grid';
import Email from './Email';
import Name from './Name';
import DataFil from './DataFil';
import Contact from './Contact';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfoCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container spacing={20} justifyContent="center">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>


          </Typography>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              Help us get back to you
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.pos} color="textSecondary">
              {/* <DisableElevation/> */}

              <Name />

            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" component="p">
              {/* <DisableElevation1/> */}
              <Email/>

            </Typography>
          </Grid>


          <Typography variant="body6" component="p">

            <Grid container spacing={20} justifyContent="center">
              {/* <Grid item xs={12} justifyContent="center" > */}
              <DataFil/>
            </Grid>
            {/* </Grid> */}
            <Contact/>

            <DisableElevation12 />

            {/* <br /> */}

            { }
          </Typography>

        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Grid>
    </Card>
  );
}