import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button1';
import Box from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import logo from './../Assets/logo.svg';
import DoctorImg from './../Assets/DoctorImg.jpg'
import SimplePaper from '../Components/Paper';

export default function Profile() {
    return (
        <React.Fragment>
            <Container fixed>
            <img src={DoctorImg} />
               <SimplePaper/>
                <p>
                    Dr.Shah is the pioneer of Andrology in India. He is In practice since 32 years, has been with Lilavati since over 20 years.

                    He is the first urologist from India to train abroad in Male Reproductive Microsurgery and has the largest experience in microsurgical varicocelectomy, microsurgical reconstruction for obstructive azoospermia and vasectomy reversal, & micro TESE for sperm retrieval in non-obstructive azoospermia. He developed India’s first penile prosthesis which is named the Shah Penile Prosthesis and has vast experience in penile prosthesis implantation and surgery for Peyronie’s disease and penile curvature correction.
                </p>

            </Container>
        </React.Fragment>
    );
}