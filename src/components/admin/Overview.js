import { Grid, Paper, Avatar, Divider } from "@mui/material"
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useOverview } from "./OverviewCss";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { PieChartBar } from "./Graph/PieChartBar";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Axis1 from "./Graph/Axis1";
import Axis2 from "./Graph/Axis2";
import Axis3 from "./Graph/Axis3";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Overview() {
    const [value, setValue] = React.useState(3);
    const [value2, setValue2] = React.useState(4);
    const classes = useOverview()
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));
    return (<div style={{ width: '98%', height: "100%" }}>

        <Grid>
            <Grid style={{ display: 'flex', textAlign: 'center', width: '100%', height: "auto", fontSize: 23, fontWeight: 700 }} > Dashboard</Grid>
            {/* <Paper style={{ display: 'flex', alignItems: 'center', borderRadius: 3, background: '#ced6e0',marginTop:'1%' }}>
                <div style={{ width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <ErrorOutlineRoundedIcon /></div>
                <div><div style={{ fontWeight: 'bold' }}>Sample Dashboard</div> <p style={{ fontSize: 13 }}>This is a sample/placeholder dashboard for now. Your tailored dashboard will be displayed once activity and traffic begin populating your AI Character or personality page in the Marketplace.</p> </div>
            </Paper> */}
        </Grid>
        <Grid style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }} >
            <div className={classes.card}>
                <div style={{ background: '#dfe4ea', height: 120, padding: 7, fontSize: 15, fontWeight: 500, borderRadius: 8 }}>
                    <div className={classes.title} >Gross Revenue<ErrorOutlineRoundedIcon /></div>
                    <div> <span className={classes.span} >$ <CountUp
                        start={0}
                        end={11.6}
                        duration={.7} />K</span> </div>
                    <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '100%' }}>$1.20K previous month</div>
                </div>

            </div>

            <div className={classes.card}>
                <div style={{ background: '#dfe4ea', height: 120, padding: 7, fontSize: 15, fontWeight: 500, borderRadius: 8 }}>
                    <div className={classes.title} >API RequestsTooltip<ErrorOutlineRoundedIcon /></div>
                    <div style={{ fontSize: 12 }}>  Successful 4.10K Failed 117.00
                        <div style={{ color: "#000", fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: 15 }}>Previous  </div>
                    </div>
                    <div style={{ fontSize: 12 }}>Successful: 3.39K Failed: 444.00</div>
                </div>

            </div>

            <div className={classes.card}>
                <div style={{ background: '#dfe4ea', height: 120, padding: 7, fontSize: 15, fontWeight: 500, borderRadius: 8 }}>
                    <div className={classes.title}>FeedbacksTooltip<ErrorOutlineRoundedIcon /></div>
                    <div style={{ fontSize: 15 }}> <span className={classes.span} > <CountUp
                        start={0}
                        end={15.6}
                        duration={.7} />K</span> Users</div>
                    <div style={{ fontSize: 15 }}> <span className={classes.span} ><CountUp
                        start={0}
                        end={10.7}
                        duration={.7} />K</span>Others</div>
                </div>

            </div>

            <div className={classes.card}>
                <div style={{ background: '#dfe4ea', height: 120, padding: 7, fontSize: 15, fontWeight: 500, borderRadius: 8 }}>
                    <div className={classes.title}>Total Downloads</div>
                    <div>50K India</div><div>70K Other Country</div></div>
                <div style={{ background: 'green' }}>
                    {/* <PieChartBar style={{width:'90%',height:'90%',background:'red'}}/> */}
                </div>
            </div>

        </Grid>
        <Grid xs={12} style={{ display: 'flex', width: "100%", justifyContent: 'space-evenly', margin: '1%', background: '#fff' }}>
            <Grid xs={6} style={{ width: '100%', padding: 5 }}><Axis1 style={{ width: '95%'  }} /></Grid>
            <Grid xs={6} style={{ width: '100%', padding: 5 }}><Axis3 style={{ width: '95%'  }} /></Grid>
        </Grid>
        <Grid xs={12} style={{ display: 'flex', width: "100%", justifyContent: 'space-evenly', margin: '4%' }}>
            <Grid xs={6} style={{ width: '90%', background: '#fff' }}><Axis2 style={{ width: '90%' }} /></Grid>
            <Grid xs={6} style={{ width: '90%', background: '#fff' }}>
                <Paper style={{ padding: 4 ,margin:7, borderRadius: 10,width:'98%' }} >
                    <div>
                        <Grid style={{ fontSize: 18, fontWeight: 600 }}>Reviews & Rating </Grid>
                        <Grid style={{ display: 'flex', alignItems: 'center', width: '90%', marginTop: '2%' }}><img src="/images/1.jpg" style={{ width: 45, borderRadius: '50%', marginRight: '4%' }} />
                            <div style={{ fontSize: 14, fontWeight: 500, }}>
                                <div  >Jamie Williams</div>
                                <div >Today at 9:11 AM</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: '27%' }}>
                                <Rating name="read-only" value={value} readOnly />
                                <Typography component="legend"   >3 stars</Typography>
                            </div>
                        </Grid>
                        <Grid style={{ width: '90%', padding: 7, fontSize: 14, fontWeight: 500 }}>
                            I've been thoroughly captivated by my conversations with the AI personality of Queen Elizabeth II on Kamoto.AI. The attention to detail in her responses and the regal charm in every.....

                        </Grid>


                        <Grid style={{ fontSize: 20, fontWeight: 600, marginTop: '4%' }}><Divider /></Grid>
                        <Grid style={{ display: 'flex', alignItems: 'center', width: '90%', marginTop: '2.5%' }}><img src="/images/2.jpg" style={{ width: 45, borderRadius: '50%', marginRight: '4%' }} />
                            <div style={{ fontSize: 14, fontWeight: 500, }}>
                                <div  >Alice Parker</div>
                                <div >Today at 2:15 AM</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: '27%', }}>
                                <Rating name="read-only" value={value2} readOnly />
                                <Typography component="legend">4 stars</Typography>
                            </div>
                        </Grid>
                        <Grid style={{ width: '90%', padding: 7, fontSize: 14, fontWeight: 500, marginTop: '2.5%' }}>
                            Kamoto.AI empowers AI personality owners and managers to create engaging social media-like posts. These posts serve as broadcasted messages from the AI personality, similar to tweets or Facebook posts. They are visible on the AI Personality's Public page within the Marketplace.

                        </Grid>

                        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '90%' }}>
                            <div style={{ fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Check all reviews  <KeyboardArrowRightIcon /></div>
                        </Grid>


                    </div>

                </Paper>
            </Grid>
        </Grid>
    </div>)
}