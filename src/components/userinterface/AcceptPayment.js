import { Button, Grid, Paper } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { acceptStyle } from "./AcceptPaymentCss";
import { hover } from "@testing-library/user-event/dist/hover";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function AcceptPayment() {
    var navigate=useNavigate()
    const classes = acceptStyle()
    

    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:true,
        arrow: true


    };

   
    var sld = createRef()
    var Psld = createRef();
    var slider = [{
        title: "Payment Gateways",
        description: "Offer a seamless payment experience on your website or app",
        picture: 'a1.png'
    },
    {
        title: "Payment Button",
        description: "Effortlessly add a Pay Now button without any coding required.",
        picture: 'a2.png'
    },
    {
        title: "Payment Links",
        description: "Create and share links over email, text and social to accept payments instantly.",
        picture: 'a3.png'
    },
    {
        title: "Rozopay POS",
        description: "Accept seamless in-store payments with India's best POS solution.",
        picture: 'a4.png'
    },
    {
        title: "Payment Pages",
        description: "Accept payments on a custom-branded online store with zero coding.",
        picture: 'a5.png'
    }]

    const imageSlider = (item) => {
        const images = item.picture.split(",")
        return images.map((image, index) => (
            <div style={{ width: '100%', height: "100%", }}><img src={`/images/${image}`} style={{ width: '90%', height: '90%', marginLeft: 10, borderRadius: 5, cursor: 'pointer' }} />
                 <div style={{ fontSize: 20, color: "#000", fontWeight: 600, marginTop: '0%',visibility:'show',textAlign:'left',marginBottom:'1%',marginLeft:'5%' }}    >{item.title}</div>
                 <div style={{ textAlign: 'left',fontWeight:450,color:'grey',fontSize:13,marginLeft:'5%'  }} >{item.description}</div>
 </div>
        ))
    }

    const sliderDetail = () => {
        return slider.map((item, index) => {
            return (<div style={{ display: 'flex', justifyContent: "center", }}   >
                <div className={classes.card}>
                    <div className={classes.content}>{imageSlider(item)}</div>
                    <Paper style={{ fontSize: '0.9rem', width: '90%', color: "rgb(137, 150, 169)", justifyContent: 'center', textAlign: '', marginLeft: '2.1%', height: 7,  }}  >
                        <div className={classes.description}>
                        <div style={{ fontSize: 20, color: "#000", fontWeight: 600, marginTop: '0%',visibility:'show',textAlign:'left',marginBottom:'1%' }}    >{item.title}</div>
                        <div ><div style={{ textAlign: 'left',fontWeight:450,color:'grey',fontSize:13 }} >{item.description}</div>
                            <div style={{ display:"flex", alignItems: 'center', margin: '%',marginTop:"4%" }}    >
                                <Grid md={6} style={{ }}> <Button variant="contained" style={{ width: 120, borderRadius: 2, textTransform: 'none', fontSize: 12 }} onClick={()=>navigate('/register')}  >SignUp <ArrowForwardIcon style={{ width: 18 }} /> </Button></Grid>
                                <Grid md={6} style={{ width:"90%"}}><Link style={{ color: '#1565c0', fontSize: 13, fontWeight: 'bold' }}>know more</Link></Grid></div>
                        </div></div>
                    </Paper></div>

            </div>)
        })
    }


    return (<div  >
        {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', fontWeight: 500, fontSize: '1rem', fontStyle: 'normal', width: '95%', color: 'grey' }}>
            <div style={{ textDecoration: 'underline', color: '#000' }}>AcceptPayment</div>
            <div> MakePayouts</div>
            <div>Start Business Banking</div>
            <div>Automate Payroll</div>
            <div>Get Credit & Loans</div>
            <Button variant="contained" style={{ width: 150, borderRadius: '0', textTransform: 'none' }}>GetStartedNow<ArrowForwardIcon /></Button>
        </div> */}

        <Grid style={{ fontWeight: 600, fontSize: '2rem', marginLeft: '5%' }}  >
            Accept Payments
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', cursor: 'pointer', alignItems: 'center', fontWeight: 400, fontSize: '1rem', fontStyle: 'normal', width: '70%', color: 'grey', marginTop: '2%' }}>
            <div style={{ textDecoration: 'underline', color: 'rgb(19 100 241)' }}>Top Products</div>
            <div style={{}}>On Website/ App </div>
            <div>Plugins</div>
            <div>On Social Media</div>
            <div>In-store</div>
            <div>International</div>
            <div>With Smart Add-ons</div>
        </div>
        {/* <img src="/images/a1.png"/> */}
        <div style={{ width: '90%', textAlign: 'center', marginTop: '2%', marginLeft: '3%', }}>

            <Slider {...settings} ref={sld}>
                {sliderDetail()}
            </Slider>
            {/* <div style={{ display: 'flex', width: 35, height: 35, borderRadius: 19, background: '#bdc3c7', alignItems: 'center', justifyContent: 'center', opacity: 0.6, position: 'absolute', zIndex: 2, top: '100%', right: '0.09%' }}>
        <ArrowForwardIosIcon onClick={handleForward} />


      </div>  */}
        </div>
        {/* </div> */}
    </div>)
}