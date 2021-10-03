import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2} />  

                    Dr.Shah is the pioneer of Andrology in India. He is In practice since 32 years, has been with Lilavati since over 20 years.

                    He is the first urologist from India to train abroad in Male Reproductive Microsurgery and has the largest experience in microsurgical varicocelectomy, microsurgical reconstruction for obstructive azoospermia and vasectomy reversal, & micro TESE for sperm retrieval in non-obstructive azoospermia. He developed India’s first penile prosthesis which is named the Shah Penile Prosthesis and has vast experience in penile prosthesis implantation and surgery for Peyronie’s disease and penile curvature correction.
      <Paper />
    </div>
  );
}
