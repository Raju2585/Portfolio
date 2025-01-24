import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../images/logo.jpg';
import bg from '../images/bg_2.jpg';
import img from '../images/img_2.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AboutMe from './AboutMe';
const Props = {
    window: undefined,
};
const Item = ({ children }) => (
    <Box sx={{ padding: 2 }}> {/* Customize as needed */}
        {children}
    </Box>
);
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

export function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontSize: 18,
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 1.5,
                                textTransform: 'none',
                                padding: 0,
                                fontWeight: 'bold',
                            }}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: 36,
                                    height: 36,
                                    border: '1px solid #000',
                                    borderRadius: '50%',
                                }}
                            />
                            SANTHIRAJU MERLA
                        </Button>

                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'black', fontSize: 17, fontWeight: 'bold', margin: 3 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
            <Card sx={{ height: '100vh', width: '100vw', position: 'relative', marginTop: '5vw' }}>
                <CardCover>
                    <img
                        src={bg}
                        srcSet={bg}
                        loading="lazy"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                    />
                </CardCover>
                {/* <CardCover
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                /> */}
                <CardContent sx={{ justifyContent: 'center', alignItems: 'start' }}>
                    <Grid container spacing={2} direction="row" alignItems="center">
                        <Grid item xs={12} sm={6} md={6}>
                            <Item>
                                <div
                                    style={{
                                        fontFamily: 'sans-serif',
                                        fontWeight: 800,
                                        fontSize: '3vw', // Font size adjusts to 5% of the viewport width
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingLeft: '7vw', // Adjust padding similarly
                                    }}
                                >
                                    <span style={{ color: 'black' }}>
                                        <Typewriter
                                            words={["HEY, I'M SANTHIRAJU"]}
                                            loop={0}
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={100}
                                            deleteSpeed={30}
                                            delaySpeed={1500}
                                        />
                                    </span>
                                </div>
                                <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    fontSize="1.5vw" // Font size adjusts based on viewport width
                                    paddingLeft="7vw" // Adjust padding similarly
                                    marginTop={3}
                                >
                                    A Result-Oriented Web Developer building and managing Websites and Web
                                    Applications that leads to the success of the overall product
                                </Typography>
                                {/* <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    fontSize="1.5vw" // Font size adjusts based on viewport width
                                    paddingLeft="7vw" // Adjust padding similarly
                                    marginTop={3}
                                >
                                    Applications that leads to the success of the overall product
                                </Typography> */}
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item>
                                <img
                                    src={img}
                                    srcSet={img}
                                    loading="lazy"
                                    alt=""
                                    style={{ width: '35vw', height: 'auto', opacity: 0.8 }}
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {/*Content about me*/}
            <AboutMe />            
        </>
    );
}