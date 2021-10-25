import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <div> */}
      <TextField label="Contact no." id="standard-size-small" defaultValue="9837545345" size="small" />
      {/* <TextField label="Size" id="standard-size-normal" defaultValue="Normal" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <TextField */}

      {/* {/label="Mohan Mehta" } */}
      {/* //   id="filled-size-small" */}
      {/* //   defaultValue="Mohan Mehta" */}
      {/* //   variant="filled" */}
      {/* //   size="small" */}
      {/* /> */}
      {/* <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <TextField */}
      {/* label="Size" */}
      {/* id="outlined-size-small" */}
      {/* defaultValue="Small" */}
      {/* variant="outlined" */}
      {/* size="small" */}
      {/* /> */}
      {/* <TextField */}
      {/* label="Size" */}
      {/* id="outlined-size-normal" */}
      {/* defaultValue="Normal" */}
      {/* variant="outlined" */}
      {/* /> */}
      {/* </div> */}
    </form >
  );
}