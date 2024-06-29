import { Grid, Button, Input, TextField } from "@mui/material";
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import { useState } from "react";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FileUploader } from "react-drag-drop-files";
import { Height } from "@mui/icons-material";
import {Paper} from "@mui/material"
const fileTypes = ["JPG", "PNG", "GIF"];


export default function Profile() {
    // const [value,setValue]=useState('')
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const [file, setFile] = useState(null);
    const handleFileChange = (file) => {
        setFile(file);
    };
    return (<div>
        <div style={{fontWeight:600,fontSize:22}}>Setting</div>
        <div style={{fontWeight:400,fontSize:15}}>Home -- Setting</div>
        <Paper md={12} style={{ display: 'flex', fontSize: 18, marginLeft: "1%", marginTop: '2%',fontWeight:500,background:'#dfe6e9',padding:10 ,alignItems:'center'}}>
            <div style={{   marginRight: '2%', border: '1px solid black',background:'#b2bec3' ,padding:5,borderRadius:5}}> Profile </div>
            <div style={{marginRight:'2%'}}>Notifications</div>
            <div>Referral</div>
        </Paper>
        <Grid fullWidth container style={{ paddingInlineStart: 5, textTransform: 'none' ,background:"#f1f2f6"}}>

            <Grid md={1.6} style={{ textAlign: 'center', width: '80%' }} >
                <img src="/images/man.avif" style={{ width: 90 }} />
                <p style={{ width: '98%', fontSize: 12, textAlign: 'left' }}>Use image of square size (ratio 1:1), in png or jpg format only</p>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="outlined" style={{ textTransform: 'none', color: '#000', fontSize: 12, width: '98%' }}>Public Profile<ScreenShareOutlinedIcon /></Button>
                </div>
            </Grid>
            <Grid md={10} spacing={4} style={{ padding: 10, width: '100%', marginLeft: '3%' }}>
                <Grid container>

                    <Grid fullWidth md={6}>
                        <TextField id="standard-basic" variant="standard" placeholder="First Name" required style={{ width: '90%', marginTop: '8%' }} />
                        <TextField id="standard-basic" variant="standard" placeholder="username" required style={{ width: '90%', marginTop: '8%' }} />

                        <FormControl style={{ width: '90%', color: '#000', marginTop:"8%" }} variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={country}
                                onChange={handleChange}
                                label="Country"

                            >

                                <MenuItem value={10}>India</MenuItem>
                                <MenuItem value={20}>Australia</MenuItem>
                                <MenuItem value={30}>London</MenuItem>
                                <MenuItem value={30}>SriLanka</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="standard-basic" variant="standard" placeholder="www.example.com" required style={{ width: '90%', marginTop: '8%' }} />
                        <div style={{ width: '90%', marginTop: '5%' }}><FileUploader handleChange={handleFileChange} name="file" types={fileTypes} /> </div>
                        <Button style={{ width: '90%', marginTop: '5%',background:"#c8d6e5"  }} variant="outlined">Submit Photo</Button>
                    </Grid>
                    <Grid md={6}>
                        <TextField id="standard-basic" variant="standard" placeholder="Last Name" required style={{ width: '90%', marginTop: '8%' }} />
                        <TextField id="standard-basic" variant="standard" placeholder="Email ID" value="mohitsingt6@gmail.com" required style={{ width: '90%', marginTop: '8%' }} />
                        <TextField id="standard-basic" variant="standard" placeholder="Mobileno." required style={{ width: '90%', marginTop: '8%' }} />
                        <TextField id="standard-basic" variant="standard" placeholder="Description" required style={{ width: '90%', marginTop: '8%', }} />
                        <TextField id="standard-basic" variant="standard" placeholder="New Password" required style={{ width: '90%', marginTop: '8%', }} />
                        <Button style={{ width: '90%', marginTop: '5%',height:90,background:"#c8d6e5" }}  variant="outlined">Save Changes</Button>
                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    </div>)
}