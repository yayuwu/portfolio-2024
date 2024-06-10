import { useState } from "react";
import { 
    Box, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Drawer,
    Hidden 
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import './index.css'

const navlist = [
    {
        id: 1,
        text: "Home",
         link: "#"   
    },
    {
        id: 2,
        text: "Portfolio",
         link: "#portfolio"   
    },
    {
        id: 3,
        text: "My journey",
         link: "#journey"   
    },
    {
        id: 4,
        text: "Skills",
         link: "#skills"   
    },
]

export default function Nav () {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    } 
    return (
        <Box>
            <AppBar position="fixed" sx={{ backgroundColor: '#161618', boxShadow: 'none', padding: '1em' }}>
                <Toolbar>
                   <Hidden mdUp>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer 
                        open={open} 
                        onClose={toggleDrawer(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                            backgroundColor: '#161618',
                            padding: '2em'
                            }
                        }}>
                            {navlist.map((list)=>(
                                <a href={list.link} key={list.id} className="animated-link">
                                   <Typography variant="h6" sx={{ padding: '10px', fontSize: '16px'}}>{list.text}</Typography>
                                </a>
                            ))}
                        </Drawer>
                   </Hidden>
                   <Hidden mdDown>
                    <img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1718045700/yael_portfolio_2024/svg/Logo_dxavj6.svg" alt="logo" style={{width:'50px', paddingTop: '1em'}}/>
                    <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        {navlist.map((list)=>(
                            <a href={list.link} key={list.id} className="variant-nav animated-link">
                                {list.text}
                            </a>
                        ))}
                    </Box>
                   </Hidden>
                </Toolbar>
            </AppBar>
        </Box>
    )
}