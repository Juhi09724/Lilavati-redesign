import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import Req from '../Assets/Req.svg'

export default function DisableElevation12() {
  return (
    // <Button variant="contained" color="primary" disableElevation>
    // Request an Appointment
    // </Button>
    <Link to={process.env.PUBLIC_URL + '/Thankyou'}>
      <Button variant="contained" color="primary"
        style={{ backgroundColor: '#F1FFFB' }} disableElevation>
        {/* Request an Appointment */}
        <img src={Req} className="Req" alt="Req" />

      </Button>
    </Link >
  );
}