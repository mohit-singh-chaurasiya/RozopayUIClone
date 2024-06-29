import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme } from "@mui/material";
import { createRef } from "react";
export default function BrandSlider(){
var brand=[{
    picture:"img1.avif"
},
{
    picture:"img2.avif"
},
{
    picture:"img3.avif"
},
{
    picture:"img4.avif"
},
{
    picture:"img5.avif"
},
{
    picture:"img6.avif"
},
{
    picture:"img7.avif"
},
{
    picture:"img8.avif"
},
{
    picture:"img9.avif"
},
{
    picture:"img10.avif"
},
{
    picture:"img11.avif"
},
{
    picture:"img12.avif"
},
{
    picture:"img13.avif"
}]

var sld = createRef()
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,

    
  };

  const showSlide=(item)=>{
    const images = item.picture.split(",")
    return images.map((image, index) => (
        <div ><img src={`/images/${image}`} style={{width:100,height:70,aspectRatio:8/4 }}/></div>
    ))
  }
  const slideBrandDetails=()=>{
    return brand.map((item,index)=>{
        return(<div style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',background:'#000'}}>
         {showSlide(item)}
        </div>)
    })
  }


    return(
    <div style={{ width:'95%',textAlign:'center',justifyContent:'center',margin:30,cursor:'pointer'}}>
 
<Slider {...settings} ref={sld}>
    {slideBrandDetails()}
</Slider>
 
    </div>)
}