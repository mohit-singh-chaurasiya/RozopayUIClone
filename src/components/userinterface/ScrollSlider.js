import Slider from "react-slick";
import AcceptPayment from "./AcceptPayment";
import BusinessSlider from "./BusinessSlider";
import Credit from "./Credit";
import MakePayouts from "./MakePayouts";
import PayoutSlider from "./PayoutSlider";
import { useScroll } from "./ScrollSliderCss";
 import { useState } from "react";
//  import Card from '@material-ui/core/Card';
// import CardContent from '@material-UI/core/CardContent';
 
import { Typography } from "@mui/material";
export default function ScrollSlider(){
const classes=useScroll()
    
    return(
   
   <div style={{boxShadow:"2px solid black"}}>
    <div className={classes.pages} >
     
    <AcceptPayment/>
</div>

<div className={classes.pages}  >
     
    <MakePayouts  />
</div>
<div className={classes.pages}>
    
    <BusinessSlider  />
</div>

<div className={classes.pages}>
   
    <PayoutSlider  />
</div>


<div className={classes.pages}>
   
    <Credit  />
</div>
   </div>
     )
}