import { Paper, Grid, List, ListItemButton } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
export default function MessageBot() {

    const steps = [
        {
            label: 'Create an API Key',
            description: `An API key of the personality you can to associate with discord bot Create API Key>`,
        },
        {
            label: 'Create a Discord Bot',
            description:
                'Step by Step Guide of Bot creation Learn How to Create Discord Bot >',
        },
        {
            label: 'Add discord bot URL',
            description: `Enter the Bot URL Learn How to get Discord Bot URL >`,
        },
    ];
    const [activeStep, setActiveStep] = React.useState(0);


    const handleReset = () => {
        setActiveStep(0);
    };
    return (<div>
           <Grid md={12} style={{ fontSize: 22, fontWeight: 700, margin: 10 }}> Communicate & Share</Grid>
            <Grid md={12} style={{ fontSize: 12, marginLeft: "1%" }} >Home -
                Communicate & Share</Grid>
        <Paper md={12} style={{ display: 'flex', fontSize: 18, marginLeft: "1%", marginTop: '2%', fontWeight: 500, background: '#dfe6e9', padding: 10, alignItems: 'center' }}>
            <div > Social Media Accounts </div>
            <div style={{ marginLeft: '2%', border: '1px solid black', background: '#b2bec3', padding: 5, borderRadius: 5 }}>Messengers Bots</div>
        </Paper>

        <Grid container style={{ marginTop: '3%' }}>
            <Grid md={2}  >
                <List>
                    <Paper elevation={0} style={{ width: '100%' ,background:'#dfe4ea'}}>
                        <ListItemButton>

                            <img src="/images/discord.png" style={{ width: 25, marginRight: '4%' }} />Discord

                        </ListItemButton>

                        <ListItemButton>
                            <img src="/images/slack.png" style={{ width: 25, marginRight: '4%' }} />Slack
                        </ListItemButton>
                        <ListItemButton>
                            More Coming Soon
                        </ListItemButton>
                    </Paper >
                </List>
            </Grid>
            <Grid md={10} style={{ display: 'flex' }}>
                <Grid md={6}>
                    <Paper elevation={0} style={{ margin: 8, padding: 8,background:'#dfe4ea' }}>
                        <Box sx={{ maxWidth: 400 }}  >
                            <Stepper activeStep={activeStep} orientation="vertical"  >
                                {steps.map((step, index) => (
                                    <Step key={step.label} style={{ marginLeft: '5', color: "#192a56", fontSize: 11 }}>
                                        <StepLabel
                                            optional={
                                                index === 2 ? (
                                                    <Typography variant="caption" style={{ color: 'green' }} >Last step</Typography>
                                                ) : null
                                            }
                                        >
                                            {step.label}

                                        </StepLabel>
                                        {step.description}

                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{ p: 3 }}>
                                    <Typography>All steps completed - you&apos;re finished</Typography>
                                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                        Reset
                                    </Button>
                                </Paper>
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid md={6}>
                    <Paper elevation={0} spacing={3} style={{ display: 'flex', width: '95%', margin: 8, padding: 8,background:'#dfe4ea' }}>
                        <Grid md={1}><DescriptionOutlinedIcon /></Grid>
                        <Grid md={11}  style={{ fontSize: 13, fontWeight: 500 }}>
                            <div>How Kamoto.AI helps you with Discord Bot?</div>

                            <div style={{marginTop:'1%'}}>KamotoAI enables AI personality owners and managers to extend their creations into Discord Bots through API keys.
                                While you'll need to host the bot using third-party services like Autocode,
                                we've created a comprehensive guide to assist you in setting up your Discord Bot at no extra cost.
                                The guide is available <Link>here</Link>.
                            </div>

                            <div style={{marginTop:'1%'}}>After you've successfully created and tested your Discord Bot, please submit its link here.
                                We'll display the link on your AI Personality's profile page in our AI Marketplace, allowing visitors to easily add your Discord Bot to their servers.
                                For any additional support, feel free to reach out to us.</div>
                            <Grid md={11}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: 14 }}>Learn more<KeyboardArrowRightIcon /></div>
                            </Grid>
                        </Grid>


                    </Paper>
                </Grid>
               

            </Grid>
            <Grid md={11} style={{display:'flex',justifyContent:'flex-end',marginLeft:'3%'}} >
                <Button style={{ background: '#CAD3C8',width:'12%' ,height:38,color:"#000"}}>Save</Button>
            </Grid>
           
        </Grid>
    </div>)
}