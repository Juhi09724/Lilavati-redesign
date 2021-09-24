import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import FormPropsTextFields from '../Components/FormProps';
import ContainedButtons2 from '../Components/Button2';
import MaterialUIPickers from '../Components/DatePicker';


export default function Form() {
    return (
        <React.Fragment>
            <Container fixed>
                <FormPropsTextFields/>
                <ContainedButtons/>
                <ContainedButtons2/>
            </Container>
        </React.Fragment>
    );
}