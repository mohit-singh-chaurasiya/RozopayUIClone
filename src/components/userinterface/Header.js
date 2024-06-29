import { Grid, TextField, Input, Button, Paper, InputAdornment, Divider } from "@mui/material";
import { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";
import AdminLogin from "../admin/AdminLogin";
import AdminRegistration from "../admin/AdminRegistration";
export default function Header() {
    const [fix,setFix] =useState(false)
    var navigate=useNavigate()

    const setFixed=()=>{
if(window.scrollY >= 392){
    setFix(true)
}else{
    setFix(false)
}

window.addEventListener("scroll",setFixed)
    }
    return (<div position="sticky" style={{ display: 'flex',  justifyContent:'center',marginTop:'2%'}}>
        <div style={{width:'100%',height:'80%',display:'flex',justifyContent:'space-evenly' ,cursor:'pointer'}}>
            <div style={{ width: '62%', height: 50,  display: 'flex', alignItems: "center",  justifyContent: 'space-evenly', color: 'rgb(113 124 140)', fontSize: 16, fontWeight: 'normal', fontWeight: 400  }}>
                <div><img src="/images/rozo.webp" style={{ width: 130, height: 120 }} /></div>
                <div>Payments</div>
                <div>Banking+</div>
                <div>Payroll</div>
                <div>Partners</div>
                <div>Resources</div>
                <div>Sapport</div>
                <div>Pricing</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'space-evenly'}}>
                <img src="india.png" style={{ width: 32, height: 32 }} />
                <Button variant="text" style={{ textTransform: 'none' }} onClick={()=>navigate('/login')}>Login</Button>

                <Button variant="contained" style={{ width: 100, borderRadius: '0', textTransform: 'none' }} onClick={()=>navigate('/register')}>SignUp<KeyboardArrowRightIcon /> </Button>
            </div>
        </div>

    </div>)
}