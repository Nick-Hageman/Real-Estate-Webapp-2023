import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';

const pages = ['Home', 'Available Lots', 'Portfolio', 'Floorplans'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(46, 51, 59)',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const buttonTheme = createTheme({
    palette: {
      primary: {
        main: 'rgb(42, 47, 56)',
      },
      secondary: {
        main: '#000000',
      },
    },
  });

export default function Navbar({handleClick}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ p: 1 }} theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="index.html"><img src="img/transparent-black-logo.png" alt="Hageman Homes Logo" height="110"/></a>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Button
                theme={buttonTheme}
                key={page}
                onClick={() => handleClick(page)}
                size='large'
                variant="contained"
                sx={{ my: 2, mx: 5, color: 'white', display: 'block', "&:hover": { color: "white" } }}
            >
                {page}
            </Button>
            ))}
          </Box>
          <Fab variant="extended">
                <SendIcon sx={{ mr: 1 }} />
                Contact
            </Fab>
        </Toolbar>
      </Container>
    </AppBar>
  );
}