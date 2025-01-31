import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Topbar = () => {
    // const { mode, setMode } = useTheme();

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl"
                sx={{
                    height: '75px'
                }}
            >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Un jour un petit mot
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Esteban Carrière
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Linkedin" arrow>
                            <IconButton target='_blank' sx={{ ml: 1, py: 0, color: 'white' }} href='https://www.linkedin.com/in/esteban-carri%C3%A8re-0655a8191/'>
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Github" arrow>
                            <IconButton target='_blank' sx={{ ml: 1, py: 0, color: 'white' }} href='https://github.com/escarrie'>
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="" arrow>
                            <MaterialUISwitch
                                checked={mode === 'dark'}
                                onChange={() => {
                                    setMode(mode === 'dark' ? 'light' : 'dark');
                                    localStorage.setItem('themeMode', mode === 'dark' ? 'light' : 'dark');
                                }}
                            />
                        </Tooltip>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Topbar;