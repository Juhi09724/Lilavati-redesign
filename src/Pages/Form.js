import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import FormPropsTextFields from '../Components/FormProps';
import ContainedButtons2 from '../Components/Button2';
import MaterialUIPickers from '../Components/DatePicker';
import Grid from '@material-ui/core/Grid';



export default function Form() {
    return (
        <React.Fragment>
            <Container fixed > 

            <Grid container spacing={2}>
             <Grid item xs={6}sm={12}xl={12}>
                <FormPropsTextFields/> 
                <ContainedButtons/>
                <ContainedButtons2/>
                </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}