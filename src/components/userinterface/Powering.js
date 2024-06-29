 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { createRef } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button } from "@mui/material"
import { Link } from 'react-router-dom';
import { powerStyle } from "./PoweringCss";
 
export default function Powering() {
    const classes=powerStyle()
   
    return (<div>
        
        <Grid container className={classes.slide}  > 
            {/* <Grid md={12} style={{ }}> */}
            <Grid md={4} style={{ background:"#fff",height:430, width:'70%',margin:'1%',padding:29 ,borderRadius:6}}>
                <div style={{fontSize:'2.3rem',fontWeight:600}}>Empower your</div>
                <div style={{fontSize:'2.3rem',fontWeight:600,color:"rgb(1 178 86)",marginTop:'1%'}}>e-commerce business</div>
                <div style={{fontSize:'1rem',fontWeight:400,color:"grey",marginTop:"1%"}}>Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.</div>

                <div style={{display:'flex',alignItems:'center', marginBottom:'7%',marginTop:"12%"}}>
                    <img src="/images/n1.png"  style={{width:'14%',marginRight:'2%'}} />
                    <img src="/images/n2.png" style={{width:'14%',marginRight:'2%'}} />
                    <img src="/images/n3.png"  style={{width:'14%',marginRight:'2%'}}/>
                    <img src="/images/n4.png" style={{width:'14%',marginRight:'2%'}} />
                    <div style={{fontSize:10,color:"grey",marginLeft:'3%'}}>+ 46,000 others</div>
                </div>
                           <Button variant="contained" style={{ width: 160, borderRadius: '0', textTransform: 'none' }}>See Solutions<ArrowForwardIcon /> </Button> 
             
            </Grid>
            <Grid md={6} style={{width:'100%',height:'100%' }}> </Grid>
            {/* </Grid> */}
        </Grid>
    </div>)
}