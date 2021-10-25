import React from 'react';
import Container from '@material-ui/core/Container';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import SimplePaper from '../Components/Paper';
import RecipeReviewCard from '../Components/Card';
import TextMobileStepper from '../Components/ImageCarousel';
import IconLabelButtons from '../Components/ButtonLabel';
import SpacingGrid from '../Components/GridSimple';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import OptionCard from '../Components/OptionCard';
import BannersCarousel from '../Components/Banners';
import UpdatesButtonFive from '../Components/UpdateButtonFive';
import UpdatesButtonOne from '../Components/UpdateButtonOne';
import UpdatesButtonTwo from '../Components/UpdateButtonTwo';
import SocInitCardFour from '../Components/SICardFour';
import SocInitCardThree from '../Components/SICardThree';
import SocInitCardTwo from '../Components/SICardTwo';
import SocInitCardOne from '../Components/SICardOne';
import TestimonialCardFour from '../Components/TestimonialCardFour';
import TestimonialCardThree from '../Components/TestimonialCardThree';
import TestimonialCardTwo from '../Components/TestimonialCardTwo';
import TestimonialCardOne from '../Components/TestimonialCardOne';
import UpdatesButtonSix from '../Components/UpdatesButtonSix';
import UpdatesButtonFour from '../Components/UpdateButtonFour';
import UpdatesButtonThree from '../Components/UpdateButtonThree';




export default function Home() {
  
  return (
    <React.Fragment>
      
        <Grid item xs={10} >

            <h2>Priority Links</h2>

            <OptionCard />
            <BannersCarousel />
          
            <h2>Updates</h2>

              <UpdatesButtonOne />
            
              <UpdatesButtonTwo />
            
              <UpdatesButtonThree/>
            
              <UpdatesButtonFour/>
            
              <UpdatesButtonFive/>
            
              <UpdatesButtonSix/>
          

            <h2>Testimonials</h2>

        

        
              <TestimonialCardOne/>
           
              <TestimonialCardTwo/>
            
              <TestimonialCardThree/>
            
              <TestimonialCardFour/>
          


            <h2>Social Initiatives</h2>

            <SocInitCardOne/>


      
         

            <SocInitCardTwo/>

        
  

            <SocInitCardThree/>

         

         

            <SocInitCardFour/>

          

        </Grid>

   
    </React.Fragment >
  );
}