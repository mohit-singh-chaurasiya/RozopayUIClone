import { Button, Grid,Paper } from "@mui/material"
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
export default function Credit() {
    const classes=acceptStyle()
const navigate=useNavigate()
    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        arrow:true


    };
    var sld=createRef()
    var Psld = createRef();
var slider=[{
    title:"Instant Settlements",
    description:"Get customer payments in your bank account instantly",
    picture:'auto4.png'
 
}] 

const imageSlider = (item) => {
    const images = item.picture.split(",")
    return images.map((image, index) => (
        <div style={{ width:'100%',height:"100%" }}><img src={`/images/${image}`} style={{width:'52%',height:'90%',marginLeft:10,aspectRatio:3/3.3}}/>
          <div style={{ fontSize: 20, color: "#000", fontWeight: 600, marginTop: '0%',visibility:'show',textAlign:'left',marginBottom:'1%',marginLeft:'3%' }}    >{item.title}</div>
          <div style={{ textAlign: 'left',fontWeight:450,color:'grey',fontSize:13,marginLeft:'3%'  }} >{item.description}</div>
          </div>
    ))
}
const handleBackward = () => {
    Psld.current.slickPrev()
  }
  const handleForward = () => {
    Psld.current.slickNext()
    
  }
const sliderDetail=()=>{
    return slider.map((item,index)=>{
        return(<div style={{display:'flex',justifyContent:"center",}} >
            <div className={classes.card}>
                <div className={classes.content}>{imageSlider(item)} <Paper style={{fontSize: '0.9rem', width: '50%', color: "rgb(137, 150, 169)", justifyContent: 'center', textAlign: '', marginLeft: ' ', height: 7,  }}>
                    <div className={classes.description}>
                        <div style={{fontSize:22,color:"#000",fontWeight:500,textAlign:'left'}}>{item.title}</div><div style={{textAlign:'left',width:'50%'}}>{item.description}</div>
            <div style={{display:'flex' ,alignItems:'center',marginTop:'4%',width:"50%",textAlign:'left',justifyContent:'space-around' }}>
                <Grid md={6} style={{ }}> <Button variant="contained" style={{ width: 120, borderRadius: 2, textTransform: 'none',fontSize:12  ,textAlign:'start',marginRight:'100%'}} onClick={()=>navigate('/register')}>SignUp <ArrowForwardIcon style={{width:18}}/> </Button></Grid>
            <Grid md={6} style={{ width:"90%"}}><Link style={{color:'#1565c0',fontSize:13,fontWeight:'bold',textAlign:"center",marginLeft:"35%"}}>know more</Link></Grid></div>
            </div>
            </Paper></div>
        </div>
        </div>)
    })
}


    return (<div style={{background:'#fff',height:'100%' }}>
       

        <Grid style={{ fontWeight: 600, fontSize: '2rem' ,marginLeft:'5%'}}>
        Get Credit & Loans
        </Grid>
         
        {/* <img src="/images/a1.png"/> */}
<div style={{width:'42%',textAlign:'center',marginTop:'2%',marginLeft:'3%',textAlignLast:'left'}}>

        {/* <Slider {...settings} ref={sld}> */}
            {sliderDetail()}
        {/* </Slider> */}
        {/* <div style={{ display: 'flex', width: 35, height: 35, borderRadius: 19, background: '#bdc3c7', alignItems: 'center', justifyContent: 'center', opacity: 0.6, position: 'absolute', zIndex: 2, top: '100%', right: '0.09%' }}>
        <ArrowForwardIosIcon onClick={handleForward} />


      </div>  */}
        </div>
        {/* </div> */}
    </div>)
}