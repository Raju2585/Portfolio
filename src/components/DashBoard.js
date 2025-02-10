import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.jpg';
import AboutMe from './AboutMe';
import { MotionButton } from './motion components/MotionComponents';
import { useRef, useState, useEffect } from 'react';
import Home from './Home';
import Project from './Projects';
import ContactForm from './ContactForm';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

export function DashBoard(props) {
    const { window: getWindow } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [isScrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const scrollToSection = (ref) => {
        if (ref?.current) {
            const navbar = document.querySelector('.appbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const elementPosition = ref.current.offsetTop - navbarHeight - 20;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
            observer.observe(projectsRef.current);
            observer.observe(contactRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
                observer.unobserve(projectsRef.current);
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const container = getWindow !== undefined ? () => getWindow().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    className="appbar"
                    component="nav"
                    sx={{
                        boxShadow: 'none',
                        backgroundColor: isScrolled ? 'transparent' : '#000000',
                        color: 'white',
                        transition: 'background-color 0.3s ease-in-out',
                    }}
                >
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
                                type: 'spring',
                                stiffness: 75,
                                delay: 0,
                                ease: "easeOut"
                            }}
                            sx={{
                                flexGrow: 1,
                                fontSize: 18,
                                color: 'white',
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
                            {navItems.map((item, index) => (
                                <MotionButton
                                    key={item}
                                    initial={{ y: -250 }}
                                    animate={{ y: 0 }}
                                    onClick={() => {
                                        switch (item) {
                                            case 'Home':
                                                scrollToSection(homeRef);
                                                break;
                                            case 'About':
                                                scrollToSection(aboutRef);
                                                break;
                                            case 'Projects':
                                                scrollToSection(projectsRef);
                                                break;
                                            case 'Contact':
                                                scrollToSection(contactRef);
                                                break;
                                            default:
                                                scrollToSection(homeRef);
                                                break;
                                        }
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 75,
                                        ease: "easeOut",
                                        delay: index === 0 ? 0.2 : index * 0.3,
                                    }}
                                    sx={{
                                        color: 'white',
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        margin: 3,
                                    }}
                                >
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
                    </Drawer>
                </nav>
            </Box>
            <div ref={homeRef}>
                <Home/>
            </div>
            {/* About Me Section */}
            <div
                ref={aboutRef}
                style={{
                    backgroundColor: '#050816',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "relative",
                    zIndex: 1
                }}
            >
                <AboutMe />
            </div>
            <div
                ref={projectsRef}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#050816',
                    position: "relative",
                    zIndex: 1
                }}
            >
                <Project />
            </div>
            <div ref={contactRef} style={{ position: "relative", width: "100%", backgroundColor: "#050816", display: 'flex', }}>
                <ContactForm/>
            </div>
        </>
    );
}
