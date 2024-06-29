import { Button, Grid, Paper } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import { acceptStyle } from "./AcceptPaymentCss";
import { useNavigate } from "react-router-dom";
export default function PayoutSlider() {
    const classes = acceptStyle()
    var navigate = useNavigate()
    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay:true,
        arrow: true


    };
    var sld = createRef()
    var Psld = createRef();
    var slider = [{

        title: " Payroll for Startups",
        description: "Master payroll and compliance with a solution built just for startups",
        picture: 'auto1.png'
    },
    {
        title: "Payroll for CAs",
        description: "Transform payroll and compliance for your clients with RazorpayX",
        picture: 'auto2.png'
    },
    {
        title: "Payroll for Enterprises",
        description: "Get India's No.1 payroll software for enterprises with RazorpayX",
        picture: 'auto3.png'
    },
    ]

    const imageSlider = (item) => {
        const images = item.picture.split(",")
        return images.map((image, index) => (
            <div style={{ width: '100%', height: "100%" }}><img src={`/images/${image}`} style={{ width: '90%', height: '90%' }} />
              <div style={{ fontSize: 20, color: "#000", fontWeight: 600, marginTop: '0%',visibility:'show',textAlign:'left',marginBottom:'1%',marginLeft:'5%' }}    >{item.title}</div>
              <div style={{ textAlign: 'left',fontWeight:450,color:'grey',fontSize:13,marginLeft:'5%'  }} >{item.description}</div>
              </div>
        ))
    }
    const handleBackward = () => {
        Psld.current.slickPrev()
    }
    const handleForward = () => {
        Psld.current.slickNext()

    }
    const sliderDetail = () => {
        return slider.map((item, index) => {
            return (<div style={{ display: 'flex', justifyContent: "center", }} >
                <div className={classes.card}>
                    <div className={classes.content}>{imageSlider(item)}</div><Paper style={{ fontSize: '0.9rem', width: '90%', color: "rgb(137, 150, 169)", justifyContent: 'center', textAlign: 'center', marginLeft: '2.1%' }}>
                        <div className={classes.description}>
                            <div style={{ fontSize: 20, color: "#000", fontWeight: 600, marginTop: '0%',textAlign:'left' }}>{item.title}</div><div style={{ textAlign: 'left' }}>{item.description}</div>
                            <div style={{ display: 'flex',   alignItems: 'center', marginTop: '4%' }}><Grid> <Button variant="contained" style={{ width: 120, borderRadius: 2, textTransform: 'none', fontSize: 12 }}>SignUp <ArrowForwardIcon style={{ width: 18 }} /> </Button></Grid>
                                <Grid style={{ width:"90%"}}><Link style={{ color: '#1565c0', fontSize: 13, fontWeight: 'bold' }}>know more</Link></Grid></div>
                        </div>
                    </Paper></div>
            </div>)
        })
    }


    return (<div style={{background:'#fff',height:'100%' }}>


        <Grid style={{ fontWeight: 600, fontSize: '2rem', marginLeft: '5%' }}>
            Automate Payroll
        </Grid>

        {/* <img src="/images/a1.png"/> */}
        <div style={{ width: '70%', textAlign: 'center', marginTop: '2%', marginLeft: '3%', display: 'flex' }}>

            {/* <Slider {...settings} ref={sld}> */}
            {sliderDetail()}
            {/* </Slider> */}

        </div>
        {/* </div> */}
    </div>)
}