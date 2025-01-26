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
import logo from './images/logo.jpg';
import AboutMe from './about/AboutMe';
import { MotionButton } from './motion components/MotionComponents';
import { useRef,useState } from 'react';
import Home from './home/Home';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

export function DrawerAppBar(props) {
    const { window:getWindow } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const aboutRef = useRef(null);
    const homeRef=useRef(null);
    const projectsRef=useRef(null);
    const contactRef=useRef(null);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    // const scrollToSection = (ref) => {
    //     if (ref.current) {
    //         ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // };
    const scrollToSection = (ref) => {
        if (ref?.current) {
            const navbar = document.querySelector('.appbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const elementPosition = ref.current.offsetTop - navbarHeight-20;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        } else {
            console.error("Ref is not attached properly.");
        }
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

    const container = getWindow !== undefined ? () => getWindow().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    className='appbar'
                    component="nav"
                    sx={{ backgroundColor: 'white', color: 'black' }}>
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
                        <MotionButton
                            initial={{ y: -250 }}
                            animate={{ y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 75,
                                delay:  0, 
                            }}
                            sx={{
                                flexGrow: 1,
                                fontSize: 18,
                                color: 'black',
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
                        </MotionButton>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            {navItems.map((item,index) => (
                                <MotionButton
                                    key={item}
                                    initial={{ y: -250 }}
                                    animate={{ y: 0 }}
                                    onClick={() =>{
                                        switch(item)
                                        {
                                            case "Home":
                                                scrollToSection(homeRef);
                                                break;
                                            case "About":
                                                scrollToSection(aboutRef);   
                                                break;
                                            case "Projects":
                                                scrollToSection(projectsRef);
                                                break;
                                            case "Contact":
                                                scrollToSection(contactRef);
                                                break;
                                            default:
                                                scrollToSection("home");
                                                break;
                                        }
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 75,
                                        delay: index===0?0.2:index*0.3, 
                                    }}
                                    sx={{
                                        color: 'black', fontSize: 17, fontWeight: 'bold', margin: 3
                                    }}>
                                    {item}
                                </MotionButton>
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
            <div ref={homeRef}>
                <Home/>
            </div>
            {/*Content about me*/}
            <div ref={aboutRef}>
                <AboutMe/>
            </div>
        </>
    );
}