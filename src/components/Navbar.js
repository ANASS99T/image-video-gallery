import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


function Navabr() {

    const pages = [
        {page: 'Photos', link: '/'},
        {page: 'Videos', link: '/videos'},
        {page: 'Playlist', link: '/newplaylist'}
    ];

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        // Old navbar

        // <nav className='navbar navbar-expand-lg bg-light'>
        //     <div className='container'>
        //         <Link className='navbar-brand' to='/'>
        //             Logo
        //         </Link>
        //         <button
        //             className='navbar-toggler'
        //             type='button'
        //             data-bs-toggle='collapse'
        //             data-bs-target='#navbarNav'
        //             aria-controls='navbarNav'
        //             aria-expanded='false'
        //             aria-label='Toggle navigation'
        //         >
        //             <span className='navbar-toggler-icon'></span>
        //         </button>
        //         <div className='collapse navbar-collapse' id='navbarNav'>
        //             <ul className='navbar-nav'>
        //                 <li className='nav-item'>
        //                     <Link className='nav-link active' aria-current='page' to='/'>
        //                         Photos
        //                     </Link>
        //                 </li>
        //                 <li className='nav-item'>
        //                     <Link className='nav-link' to='/videos'>
        //                         Videos
        //                     </Link>
        //                 </li>
        //
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        // new navbar

        <>
            <AppBar position="sticky" sx={{mb: 2}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': {
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <Link to={page.link} key={page.page}
                                          style={{
                                              color: 'grey',
                                              textDecoration: 'none',
                                              '&":hover': {
                                                  color: 'primary',
                                                  textDecoration: 'none'
                                              },
                                          }}
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography variant="h6">
                                                {page.page}
                                            </Typography>
                                            {/*<Typography textAlign="center">{page.page}</Typography>*/}
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Link
                                    to={page.link}
                                    key={page.page}
                                    style={{
                                        textDecoration: 'none',
                                        '&":hover': {
                                            color: 'primary',
                                            textDecoration: 'none'
                                        },
                                    }}

                                >
                                    <Button
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            textDecoration: 'none',

                                        }}
                                        onClick={handleCloseNavMenu}
                                    >
                                        {page.page}
                                    </Button>
                                </Link>
                                // <Button
                                //     key={page.page}
                                //     onClick={handleCloseNavMenu}
                                //     sx={{my: 2, color: 'white', display: 'block'}}
                                // >
                                //     {page.page}
                                // </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            {/* Login box */}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>


    );
}

export default Navabr;