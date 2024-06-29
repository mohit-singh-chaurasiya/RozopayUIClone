import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button } from "@mui/material"
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { createRef } from "react";
export default function BannerSlide() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay:true,
        arrow:true


    };
    var sld = createRef();

    var slider = [{
        line1: "Advanced Payment Solutions",
        line2: "for India's finest disruptors",
        line3: "100+ Payment Methods | Easy Integration | Powerful Dashboard",
        picture: "desktop 1 (1).png"
    },
    {
        line1: "Automated Payroll",
        line2: "for India's finest disruptors",
        line3: "Automated Payroll & Compliances | Built for Startups & Enterprises",
        picture: "desktop 2.png"
    },
    {
        line1: "Easy In-person Payments",
        line2: "for India's finest disruptors",
        line3: "Quick Payments | Seamless Integration | Top-tier UPI stack",
        picture: "desktop 3.png"
    },
    {
        line1: "Effortless Banking",
        line2: "for India's finest disruptors",
        line3: "Powerful Automation | Smart Dashboard | Integrated Access",
        picture: "desktop 4.png"
    }]

    
    // var images = Object.values(slider)[0].picture.split(",")
    // const imageSlider = () => {
    //     return images.map((item, index) => {
    //         return (<div><img src={`images/${item}`} style={{ background: 'red' }} /> </div>)
    //     })

    // }
    const imageSlider = (item) => {
        const images = item.picture.split(",")
        return images.map((image, index) => (
            <div  ><img src={`/images/${image}`} style={{width:700,height:'auto'}}/></div>
        ))
    }

    const sliderDetail = () => {
        return slider.map((item, index) => {
            return (<div style={{ width: '100%', height: 'auto', display: "flex", justifyContent: 'center' ,background:"red", alignItems: "center", }}>
                <div style={{  display: 'flex', justifyContent: 'center', width:'98%', alignItems: 'center' }}>
                    <div style={{ width: '100%', lineHeight: '3.7rem'   }}>
                        <div style={{
                            fontSize: '3rem', fontWeight: 650, textDecoration: 'none', color: 'rgb(47 94 255)',
                        }}>{item.line1} </div>
                        <div style={{ fontSize: '3rem', fontWeight: 600 }}> {item.line2}</div>
                        <div style={{ fontSize: 14, fontWeight: 400, color: "rgb(94, 110, 135)" }}>{item.line3}</div><div>
                            <Button variant="contained" style={{ width: '30%', borderRadius: '0', textTransform: 'none', marginRight: 40 }}>Sign Up Now<ArrowForwardIcon /> </Button><Link style={{ fontWeight: 'bold', color: "rgb(47 94 255)" }}>Know More</Link>
                            </div>
                    </div>
                    {/* <div  ><img src="desktop 1.png" style={{ textAlign: 'left', width: 700, }} /></div> */}
                    <div style={{ }} >{imageSlider(item)}</div>
                </div>
            </div>)
        })
    }


    return (
        <div style={{   marginLeft:80 ,marginRight:20,   justifyContent: 'center', alignItems: "center" ,marginTop:'4%' }}>

            {/* <div  style={{ textAlign: 'left', width: 700, display:'flex'}}> {sliderDetail()}</div> */}
            <Slider {...settings} ref={sld}>
                {sliderDetail()}
            </Slider>

        </div>

    )
}