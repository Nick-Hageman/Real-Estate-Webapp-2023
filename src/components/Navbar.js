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
import Modal from '@mui/material/Modal';

const pages = ['Home', 'Available Lots', 'Portfolio', 'Floorplans', "Contact"];

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Navbar({handleClick}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <a href="index.html" className='nav-logo-container'><img src="img/transparent-black-logo.png" alt="Hageman Homes Logo" className='nav-logo'/></a>
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
                page != "Contact" ?
                <MenuItem key={page} onClick={() => handleClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                :
                <MenuItem key={page} onClick={() => handleOpen()}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            page != "Contact" ?
            <Button
                theme={buttonTheme}
                key={page}
                onClick={() => handleClick(page)}
                size='large'
                variant="contained"
                sx={{ my: 2, mx: 5, color: 'white', display: 'block', "&:hover": { color: "white" } }}
            >
                {page}
            </Button> :
            <div>
                <Button
                theme={buttonTheme}
                key={page}
                onClick={() => {handleOpen()}}
                size='large'
                variant="contained"
                sx={{ my: 2, mx: 5, color: 'white', display: 'block', "&:hover": { color: "white" } }}
                > CONTACT
                </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Tom Hageman
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  (563) 581-9234<br/>tjhageman5@gmail.com<br/>Dyersville, IA, United States, 52040
                  </Typography>
                  <a className='modal-logo-container'><img src="img/transparent-white-logo.png" alt="Hageman Homes Logo" className='modal-logo'/></a>
                </Box>
              </Modal>
            </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}