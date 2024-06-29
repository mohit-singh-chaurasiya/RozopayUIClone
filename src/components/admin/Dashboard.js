import { AppBar, Box, Divider, Grid, ListItemButton, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Padding } from "@mui/icons-material";
import { useStyles } from "./DashboardCss";
import StorageIcon from '@mui/icons-material/Storage';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Overview from "./Overview";
import Profile from "./SubList/Profile";
import ChatOverview from "./SubList/ChatOverview";
import Notification from "./SubList/Notification";
import CommunicationShare from "./SubList/CommunicationShare";
import MessageBot from "./SubList/MessageBot";
import AdminLogin from "./AdminLogin";
export default function Dashboard() {
    const classes = useStyles()
    var navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ background: '#f1f2f6', color: '#000' }}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" style={{ display: 'flex', alignItems: 'center', width: '98%' }}>
                    <div style={{ display: 'flex', width: 200, alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left', cursor: 'pointer' }}>
                        <img src="/images/komoto.avif" style={{ width: 32, height: 32, borderRadius: 50 }} />
                        <div style={{ display: 'flex', fontSize: 15, marginLeft: '6%', textAlign: 'center', lineHeight: '1.2rem' }}>Mohit Singh AI Persnality</div>
                    </div>
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'right', width: 'auto', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}> <StorefrontIcon />Marketplace</div>
                    <Button variant="text" style={{ boxShadow: '2px solid #000', color: "#000", width: 80 }}>$0</Button>
                    <Button variant="text"  ><NotificationsSharpIcon style={{ color: '#000' }} /></Button>


                    <Stack direction="row" spacing={2}>

                        <div>
                            <Button
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                style={{ color: "#000", textTransform: 'none' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/images/man.avif" style={{ width: 32, height: 32, borderRadius: 30 }} />Hi,Mohit
                                </div>
                            </Button>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onKeyDown={handleListKeyDown}
                                                >
                                                    <Grid style={{ display: 'flex', alignItems: 'center', width: 300 }}> <img src="/images/man.avif" style={{ width: 32, height: 32, borderRadius: 30, marginRight: '5%' }} /><div style={{ textAlign: 'left' }}><div>
                                                        Mohit Singh<Button style={{width:40,background:'#c7ecee',textTransform:'none',height:20,fontSize:12,color:'#20bf6b',marginLeft:10}}>owner</Button></div>
                                                        <div>mohitsingt6@gmail.com</div></div></Grid>
                                                    <Grid>
                                                        <Divider style={{ borderWidth: 0.7 }} /><List>
                                                            <ListItem disablePadding>
                                                                <ListItemButton  >
                                                                    My Charts

                                                                </ListItemButton>
                                                            </ListItem>
                                                            <Divider style={{ borderWidth: 0.7}}/>
                                                            <ListItem disablePadding>
                                                                <ListItemButton  >
                                                                    My Profile

                                                                </ListItemButton>
                                                            </ListItem>
                                                            <Divider style={{ borderWidth: 0.7}}/>
                                                            <ListItem disablePadding>
                                                                <ListItemButton  >
                                                                    My Dashboard

                                                                </ListItemButton>
                                                            </ListItem>
                                                            <Divider style={{ borderWidth: 0.7}}/>
                                                            <ListItem disablePadding>
                                                                <ListItemButton  >
                                                                    Account Settings

                                                                </ListItemButton>
                                                            </ListItem>
                                                            <Divider style={{ borderWidth: 0.7}}/>
                                                            <ListItem disablePadding onClick={()=>navigate('/login')}>
                                                                <ListItemButton  >
                                                                    SignOut

                                                                </ListItemButton>
                                                            </ListItem>
                                                        </List></Grid>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Stack>

                </div>





            </Toolbar>
        </AppBar>
        <Grid container style={{ PaddingInlineStart: 5 }}>
            <Grid item md={2.5} style={{ background: '#dfe4ea', height: 1200 }}>

                <List className={classes.listStyle}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/dashboard/overview')}>
                            <ListItemIcon className={classes.menuItemStyle}>

                                <ClearAllIcon className={classes.marginIcon} />
                                <ListItemText primary={<span className={classes.spanStyle}  >Overview</span>} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <Accordion className={classes.AccordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ background: '#dfe4ea' }}
                        >
                            <Typography style={{ display: 'flex', alignItems: 'center', }}><PeopleAltOutlinedIcon className={classes.marginIcon} />Communicate & Enga...</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.backgroundStyle}  >
                            <Typography  >
                                {/* <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Social Media Accounts</List> */}
                                <List className={classes.optionlist} onClick={() => navigate('/dashboard/communication')}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Social Posts</List>
                                <List className={classes.optionlist} onClick={() => navigate('/dashboard/messagebot')}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Messangers Bots</List>

                                {/* <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Your Inbox</List> */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={classes.AccordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ background: '#dfe4ea' }}
                        >
                            <Typography style={{ display: 'flex', alignItems: 'center' }}><StorageIcon />APIs & Logs</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.backgroundStyle}>
                            <Typography>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Overview</List>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />API Keys</List>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Events</List>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} />Logs</List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={classes.AccordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ background: '#dfe4ea' }}
                        >
                            <Typography style={{ display: 'flex', alignItems: 'center' }}><AccountBalanceWalletIcon />Billing & Quota</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.backgroundStyle}>
                            <Typography>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Subscription</List>
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Usage Quota</List>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={classes.AccordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ background: '#dfe4ea' }}
                        >
                            <Typography style={{ display: 'flex', alignItems: 'center' }}><SettingsApplicationsIcon />User Settings</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.backgroundStyle}>
                            <Typography>
                                <List className={classes.optionlist} onClick={() => navigate('/dashboard/profile')}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Profile</List>
                                <List className={classes.optionlist} onClick={() => navigate('/dashboard/notification')}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Notifications</List>

                                {/* <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Locale</List> */}
                                <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Referral</List>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={classes.AccordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ background: '#dfe4ea' }}
                        >
                            <Typography style={{ display: 'flex', alignItems: 'center' }}><ChatOutlinedIcon />Chat Credits</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.backgroundStyle}>
                            <Typography>
                                <List className={classes.optionlist} onClick={() => navigate('/dashboard/recharge')}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Overview & Recharges</List>
                                {/* <List className={classes.optionlist}><FiberManualRecordIcon style={{ width: 8, height: 8, marginRight: '7%' }} /> Usage History</List> */}


                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon className={classes.menuItemStyle}>

                                <WidgetsOutlinedIcon />
                                <ListItemText primary={<span className={classes.spanStyle} >My Feed</span>} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon className={classes.menuItemStyle}>

                                <LocalLibraryOutlinedIcon />
                                <ListItemText primary={<span className={classes.spanStyle}  >Calls</span>} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>


                </List>
                <Grid style={{ display: 'flex', justifyContent: 'center' }}> <Button variant="text" style={{ width: '80%', height: 40, background: "#CAD3C8", color: '#000', textTransform: 'none' }} ><TextsmsOutlinedIcon style={{ width: 20, height: 20, borderRadius: '50%' }} />My Charts</Button></Grid>

            </Grid>


            <Grid item md={9} style={{ padding: 20, background: "#f1f2f6" }}>


                <Routes>
                    <Route element={< Overview />} path={'/overview'} ></Route>
                    <Route element={< Profile />} path={'/profile'} ></Route>
                    <Route element={< ChatOverview />} path={'/recharge'} ></Route>
                    <Route element={< Notification />} path={'/notification'} ></Route>
                    <Route element={< CommunicationShare />} path={'/communication'} ></Route>
                    <Route element={< MessageBot />} path={'/messagebot'} ></Route>


                </Routes>


            </Grid>
        </Grid>

    </Box>)
}