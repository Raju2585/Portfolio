import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import profilePic from '../assets/profilePic.png';
import AboutMe from './AboutMe';
import { MotionButton } from './motion components/MotionComponents';
import { useRef, useState, useEffect } from 'react';
import Home from './Home';
import Project from './Projects';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { Avatar, Modal } from '@mui/material';

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
    const [openModal, setOpenModal] = useState(false);

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
        let timeout;
        const observer = new IntersectionObserver(([entry]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setScrolled(!entry.isIntersecting);
            }, 100); // Debounce to 100ms
        }, { threshold: 0.5 });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
            observer.observe(projectsRef.current);
            observer.observe(contactRef.current);
        }

        return () => {
            observer.disconnect();
            clearTimeout(timeout);
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
                        paddingX: '5vw'
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
                        <img
                            src={profilePic}
                            alt="Profile"
                            onClick={() => setOpenModal(true)}
                            style={{
                                width: 36,
                                height: 36,
                                border: '1px solid #000',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }}
                        />
                        <MotionButton
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 15,
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
                                willChange: 'transform',
                                transform: 'translateZ(0)',
                            }}
                        >

                            {/* <Avatar src='../assets/profilePic.png' /> */}
                            SANTHIRAJU MERLA
                        </MotionButton>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'none', md: 'block' }, willChange: 'transform', // Forces GPU rendering
                                transform: 'translateZ(0)',
                            }}>
                            {navItems.map((item, index) => (
                                <MotionButton
                                    key={item}
                                    initial={{ y: -200 }}
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
                                        stiffness: 100,
                                        damping: 15,
                                        ease: "easeOut",
                                        duration: 0.5,
                                        delay: index === 0 ? 0.2 : index * 0.3,
                                    }}
                                    sx={{
                                        color: 'white',
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        margin: 3,
                                        willChange: 'transform',
                                        transform: 'translateZ(0)',
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
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '280px',
                            height: '350px',
                            backgroundColor:'transparent'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            style={{
                                backgroundColor: 'transparent',
                                borderRadius: '10px',
                                maxWidth: '300px',
                                maxHeight: '350px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={profilePic}
                                alt="Profile Large"
                                style={{
                                    maxWidth: '300px',
                                    maxHeight: '350px',
                                    borderRadius: '10px',
                                }}
                            />
                        </motion.div>
                    </Box>
                </Modal>

            </Box>
            <div ref={homeRef}>
                <Home />
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
                <AboutMe contactRef={contactRef} />
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
                <ContactForm />
            </div>
        </>
    );
}
