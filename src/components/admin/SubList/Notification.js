import { Grid, ListItemButton, List, Paper, Divider } from "@mui/material"
import Switch from '@mui/material/Switch';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
export default function Notification() {
    return (<div>
        <Grid container>
            <Grid md={12} >
                <div style={{fontWeight:600,fontSize:22}}>Setting</div>
                <div style={{fontWeight:400,fontSize:15}}>Home -- Setting</div>
            </Grid>
            <Paper md={12} style={{ display: 'flex', fontSize: 18, marginLeft: "1%", marginTop: '2%',fontWeight:500,background:'#dfe6e9',padding:10,width:"98%" ,alignItems:'center'}}>
            <div > Profile </div>
            <div style={{   marginRight: '2%', border: '1px solid black',background:'#b2bec3' ,padding:5,marginLeft:'2%',borderRadius:5}}>Notifications</div>
            <div>Referral</div>
        </Paper>
            <Grid md={12}>

                <List style={{ lineHeight: 1.5 }}>
                    <div style={{fontWeight:500,fontSize:20,marginTop:"2.5%"}}>Notification Preferences

                    </div>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    AI Personality Details Edited in Dashboard<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />
                                </div>
                                <div style={{fontSize:13}}>Receive a notification every time the details of your AI personality is edited
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68'  }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    AI Personality Training by Chat Submitted<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />

                                </div>
                                <div style={{fontSize:13}}>Receive a notification for every submission on Train by Chat
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    AI Personality Details Edited in Dashboard<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />
                                </div>
                                <div style={{fontSize:13}}>Receive a notification every time the details of your AI personality is edited
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    AI Personality Training by Public Links Submitted<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />

                                </div>
                                <div style={{fontSize:13}}>Receive a notification for every submission on Train by Public Links
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    AI Personality Training by Private Data Submitted<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />

                                </div>
                                <div style={{fontSize:13}}>Receive a notification for every submission on Train by Private Data

                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    Training for AI Personality Completed<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />

                                </div>
                                <div style={{fontSize:13}}>Receive a notification when Training is Over for your AI Personality
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>

                                    Monetization Details updated in Dashboard<ErrorOutlineOutlinedIcon style={{ width: 20, marginLeft: '1%' }} />
                                    Tooltip
                                </div>
                                <div style={{fontSize:13}}>Receive a notification when your AI Personality’s monetization details are updated
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                    <Grid md={12}><Divider /></Grid>
                    <Paper>
                        <ListItemButton>

                            <Switch defaultChecked style={{ color: '#535c68' }} />
                            <div style={{fontWeight:500}}>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    Listing Status Changed in Dashboard<ErrorOutlineOutlinedIcon />

                                </div>
                                <div style={{fontSize:13}}>Receive a notification when your AI Personality’s Makrteplace listing status changes
                                </div>
                            </div>
                        </ListItemButton>
                    </Paper>
                </List>
            </Grid>
        </Grid>
    </div>)
}