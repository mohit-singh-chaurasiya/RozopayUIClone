import { Grid, List, ListItemButton, Paper } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import MinimizeIcon from '@mui/icons-material/Minimize';
export default function CommunicationShare() {
    return (<div>
        <Grid container>
            <Grid md={12} style={{ fontSize: 22, fontWeight: 700, margin: 10 }}> Communicate & Share</Grid>
            <Grid md={12} style={{ fontSize: 12, marginLeft: "1%" }} >Home -
                Communicate & Share</Grid>
        </Grid>
        <Paper md={12} style={{ display: 'flex', fontSize: 18, marginLeft: "1%", marginTop: '2%',fontWeight:500,background:'#dfe6e9',padding:10,alignItems:'center' }}>
            <div style={{   marginRight: '2%', border: '1px solid black',background:'#b2bec3' ,padding:5,borderRadius:5}}> Social Media Accounts </div>
            <div>Messengers Bots</div>
        </Paper>
        <Grid style={{ display: 'flex', marginTop: '3%' }}>
            <Grid md={1.9}>
                <List style={{ background:'#dfe4ea' }}>
                    <ListItemButton style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/images/world.png" style={{ width: 28, marginRight: "3%" }} />All Accounts
                    </ListItemButton>

                    <ListItemButton style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/images/facebook.png" style={{ width: 30, marginRight: "3%" }} />Facebook
                    </ListItemButton>

                    <ListItemButton style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/images/instagram.png" style={{ width: 30, marginRight: "3%" }} />Instagram
                    </ListItemButton>
                    <ListItemButton style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/images/linkedin.png" style={{ width: 30, marginRight: "3%" }} />Linkedin
                    </ListItemButton>
                </List>
            </Grid>
            <Grid md={10}>
                <Paper elevation={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <Grid style={{ position: 'absolute', display: "flex", alignItems: 'center' ,justifyContent:"flex-start"}}>
                        <Paper>
                            <div>Content</div>
                            <div>Edit social media content</div>
                        </Paper>
                        <Paper><div>Schedule  </div>
                            <div>Preplan automated postst</div></Paper>
                    </Grid> */}
                    <img src="/images/refe.png" style={{ width: "45%", marginTop: '10%',borderRadius:50 }} />
                </Paper>
            </Grid>
        </Grid>
    </div>)
}