import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import FormPropsTextFields from '../Components/FormProps';
import ContainedButtons2 from '../Components/Button2';
import MaterialUIPickers from '../Components/DatePicker';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../Components/InfoCard';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    App: {
      background: "#F1FFFB",
      height: "100%",
      alignContent: "center", alignItems: "center",
    },
  });


export default function Form() {
    const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
            <InfoCard/>
           
        </Container>
    </React.Fragment>
    </div>
  );
}