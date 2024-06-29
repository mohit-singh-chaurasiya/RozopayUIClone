import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid, List,ListItem,ListItemButton } from '@mui/material';

export default function UserDetails() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<div >
        
        <Menu
        style={{background:'#dfe4ea',fontSize:18,fontWeight:500,borderRadius:20}}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}


        >
            <Grid style={{ display: 'flex', alignItems: 'center', width: 300 }}> <img src="/images/man.png" style={{ width: 32, height: 32, borderRadius: 30, marginRight: '5%' }} /><div><div>
                Mohit Singh</div>
                <div>mohitsingt6@gmail.com</div></div></Grid>
            <Grid><List>
                <ListItem disablePadding>
                    <ListItemButton  >
                       My Charts
                       
                    </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  >
                       My Profile
                       
                    </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  >
                       My Dashboard
                       
                    </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  >
                       Account Settings
                       
                    </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  >
                      SignOut
                       
                    </ListItemButton>
                    </ListItem>
            </List></Grid>
        </Menu>
    </div>)
}