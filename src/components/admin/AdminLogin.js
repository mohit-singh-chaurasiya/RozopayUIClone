import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { ElderlySharp, LineWeight } from '@mui/icons-material';
import AdminRegistration from './AdminRegistration';

import { postData } from '../../services/FetchNodeService';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function Copyright(props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/home">
                MedBazzar.in
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminLogin() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    var navigate = useNavigate()
    const [emailid, setEmailid] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleClick = async () => {
        var result = await postData('login/check_admin_login', { emailid, password })
        if (result.status) {
            localStorage.setItem('ADMIN', JSON.stringify(result.data))

            navigate('/dashboard/overview ')
        }
        else {
            Swal.fire({
                icon: "warning",
                title: result.message,
                timer: 1500,
                toast: true
            });
        }

    }



    return (<Grid sm={12} md={8} style={{ display: 'flex', justifyContent: 'center', color: "rgb(1 129 115)", height: "100vh", background: 'rgb(169 196 179)' }}>
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',



                    }}
                    style={{ marginTop: "30%" }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'rgb(1, 129, 115)', fontSize: 25, fontWeight: 600 }}>
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            placeholder="Email Address or Mobileno."
                            name="email"
                            // value={emailid}
                            autoComplete="email"
                            autoFocus
                            variant="standard"
                            onChange={(e) => setEmailid(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth

                            placeholder="Password"

                            type={showPassword ? 'text' : 'password'}
                            id="password"

                            variant="standard"
                            onChange={(e) => setPassword(e.target.value)}
                        // style={{background:'rgb(141 217 253)',border:"3px solid rgb(123 189 220)",borderRadius:5}}
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" onClick={togglePasswordVisibility} > {showPassword ? 'Hide' : 'Show'}</Checkbox>}
                            label="Show Password"
                        />

                        <Button
                            onClick={handleClick}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ background: 'rgb(1, 129, 115)', textTransform: "none" }}
                        >
                            Sign In
                        </Button>

                    </Box>
                    <Link style={{ cursor: 'pointer', textAlign: 'center', fontSize: 15, color: "rgb(1, 129, 115)" }} onClick={() => navigate('/register')}>
                        Don't have an account? Sign Up</Link>
                    {/* <Copyright sx={{ mt: 3 }} /> */}
                </Box>

            </Container>
        </ThemeProvider>
    </Grid>

    );
}

