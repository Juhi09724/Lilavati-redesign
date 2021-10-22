import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function FormCardOne() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container">

                    <Grid container spacing={3} justifyContent="center">

                        <Grid item xs={10}>

                            <div className="flexbox-item Position-Info-Text">

                                <Typography variant="body1" gutterBottom>
                                Dr.Shah is the pioneer of Andrology in India. He is In practice since 32 years, has been with Lilavati since over 20 years.

He is the first urologist from India to train abroad in Male Reproductive Microsurgery and has the largest experience in microsurgical varicocelectomy, microsurgical reconstruction for obstructive azoospermia and vasectomy reversal, & micro TESE for sperm retrieval in non-obstructive azoospermia. He developed India’s first penile prosthesis which is named the Shah Penile Prosthesis and has vast experience in penile prosthesis implantation and surgery for Peyronie’s disease and penile curvature correction.
                                </Typography>

                            </div>

                        </Grid>

                    </Grid>


                </div>

            </CardContent>
        </Card>
    );
}