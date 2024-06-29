import { Grid } from "@mui/material"
export default function Text() {
    return (<div style={{display:'flex',justifyContent:'center',lineHeight:'3.5rem',width:'90%',marginBottom:"5%"}}>
        <div style={{width:'100%',cursor:'pointer'}}>
        <div style={{ fontSize: '3.5rem', fontWeight: 620, textDecoration: 'none', margin: 0, padding: 0, lineHeight: '4rem',marginLeft:"5%" }}>The all in one <span style={{ color: 'rgb(1 178 86)' }}>finance platform</span> </div>
        <div style={{ fontSize: '3.5rem', fontWeight: 620, textDecoration: 'none', margin: 0, padding: 0, lineHeight: '4rem',marginLeft:"5%" }}>you've been looking for</div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',fontWeight:'bold',marginTop:'1%' }}>
            <div style={{fontWeight:'normal',color:'grey'}}>With Razorpay, you can:</div>

            <div>Accept Payment</div>
            <div>Make Payouts</div>
            <div>Start Business Banking </div>
            <div>Automate Payroll</div>
            <div>Get Credit & Loans</div>

        </div>
        </div>
    </div>)
}