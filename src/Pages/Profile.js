import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import Box from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import logo from './../Assets/logo.svg';
import DoctorImg from './../Assets/DoctorImg.jpg'
import SimplePaper from '../Components/Paper';
import Grid from '@material-ui/core/Grid';

export default function Profile() {
    return (
        <React.Fragment>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={12} xl={12}>
                        <img src={DoctorImg} />
                        <SimplePaper />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}