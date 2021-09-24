import React from 'react';
import Container from '@material-ui/core/Container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Confirmation() {
    return (
      <React.Fragment>
          <Container fixed>
              <CheckCircleIcon/>
              <p>
                  Thankyou
              </p>
          </Container>
    </React.Fragment>
  );
}