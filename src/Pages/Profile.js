import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import Box from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import logo from './../Assets/logo.svg';
// import DoctorImg from './../Assets/DoctorImg.jpg'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link, Router } from "react-router-dom";
import FormCardOne from '../Components/FormCardS';


export default function Profile() {
    return (
        <React.Fragment>
            <div className="flexbox-container">
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={10}>
                        <div>
                            <FormCardOne />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}