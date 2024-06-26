import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import navlist from  '../../../data/navlist.json'


export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200, backgroundColor: '#161618', height: '100vh' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navlist.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <a href={item.link} style={{textDecoration: 'none', paddingLeft:'16px', color: '#97DFFC', fontSize: '18px'}}>
                {item.text}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{position: 'fixed', top: '1em', left: '.5em'}}>
      <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color: '#97DFFC'}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
