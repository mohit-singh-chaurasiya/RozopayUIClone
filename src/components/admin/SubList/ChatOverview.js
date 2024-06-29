import { Button, Grid, Paper } from "@mui/material"
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
export default function ChatOverview() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));


    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return (<div>
        <Grid style={{ fontSize: 22, fontWeight: 700, margin: 10 }}>Chat Credits</Grid>
        <Grid md={11} style={{ width: "100%",color:'#130f40' }}>
            <Paper style={{ padding: 12, margin: 10, lineHeight: 1.5,width:'98%' }}>
                <div style={{ display: 'flex', alignItems: 'center' ,fontWeight:700}}>Chat Credits <ErrorOutlineOutlinedIcon style={{ width: 20 }} /> </div>
                <Grid style={{ display: 'flex' }}>
                    <Grid md={6} style={{ width: "100%",fontWeight:500 }}>
                        <div style={{ fontSize: 18, fontWeight: 600 }}>$0</div>
                        <div  >This is the balance which you can utilize while interacting with premium/paid AI Personalities</div>
                    </Grid>
                    <Grid md={6} style={{ width: "100%", display: 'flex', justifyContent: 'flex-end' }}><Button style={{ textTransform: 'none', background: "#CAD3C8", color: '#000', width: "30%", borderRadius: 5,height:40 }}>Add Credits</Button></Grid>
                </Grid>
            </Paper>
            <Paper style={{ padding: 12, margin: 10, lineHeight: 1.5,width:'98%' }}>
                <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' ,background:'#dfe4ea',alignItems:'center'}}>
                    <div style={{ fontWeight:500,marginRight: '2%', border: '1px solid black',background:'#b2bec3' ,padding:5,marginLeft:'2%',borderRadius:5}}>Credit Recharge History </div>
                    <div style={{background:"#dff9fb",fontWeight:500}}>Credit Usage History </div>
                    <div style={{background:"#dff9fb",fontWeight:500}}>API Subscription Payments </div>
                    <div style={{background:"#dff9fb",fontWeight:500}}>Fan Club Subscription Payments </div>
                </Grid>
                <Grid style={{  width: '100%',display:'flex',alignItems:'center',padding:10,margin:10}}>
                    <div style={{ width: '100%'   }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                style={{ width: '100%'   }}
                            />

                        </Search>
                       
                    </div>
                    <Button  style={{textTransform:'none', background: "#CAD3C8", color: '#000',width:'40%',borderRadius:5,marginLeft:'50%',height:40}}>Export<IosShareOutlinedIcon/></Button>

                </Grid>
                <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <div style={{background:"#dff9fb",fontWeight:500}}>Persnality</div>
                    <div style={{background:"#dff9fb",fontWeight:500}}>Subscription Charges </div>
                    <div style={{background:"#dff9fb",fontWeight:500}}>Subscribed At </div>
                     
                </Grid>
            </Paper>
            <Paper style={{display:'flex',justifyContent:'center'}}>
                <img src="/images/ref.avif" style={{width:"40%",marginTop:'8%'}}/>
            </Paper>
        </Grid>
    </div>)
}