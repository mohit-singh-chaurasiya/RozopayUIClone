import Header from "../components/userinterface/Header"
import BannerSlide from "../components/userinterface/BannerSlide"
import BrandSlider from "../components/userinterface/BrandSlider"
import { AppBar, Paper, boxClasses } from "@mui/material"
import Text from "../components/userinterface/Text"
import AcceptPayment from "../components/userinterface/AcceptPayment"
import MakePayouts from "../components/userinterface/MakePayouts"
import BusinessSlider from "../components/userinterface/BusinessSlider"
import PayoutSlider from "../components/userinterface/PayoutSlider"
import Credit from "../components/userinterface/Credit"
import ScrollSlider from "../components/userinterface/ScrollSlider"
import Powering from "../components/userinterface/Powering"
import PowerText from "../components/userinterface/PowerText"
import { homeStyle } from "./HomeCss"
export default function Home() {
    const classes = homeStyle()
    return (<div style={{ width: '100%', height: '100vh' }}>
        <AppBar position="sticky" style={{ width: '100%', position: 'sticky', background: '#fff' }}>
            <Header />
        </AppBar >
        {/* marginLeft:'5%',marginRight:'5%' */}
        <div style={{ marginRight: 50, marginLeft: 50 }}>
            <BannerSlide />
        </div>
        <div style={{ justifyContent: 'center', marginLeft: 20, marginTop: '5%' }}>
            <BrandSlider />
        </div>
        <div style={{ margin: "5%" }}>
            <Text />
            <ScrollSlider style={{ background: 'red', }} />
        </div>


       
        <div style={{ marginLeft: "8%" ,marginRight:'8%'}}>
        <PowerText  />
            <Powering />
        </div>
       

    </div>)
}