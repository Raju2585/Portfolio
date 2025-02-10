import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";
import EarthCanvas from "./canvas/EarthCanvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import StarsCanvas from "./canvas/Stars";

const ContactForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "sujata@jsmastery.pro",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };
    const MemoizedEarthCanvas = useMemo(() => <EarthCanvas />, []);
    const MemoizedStarsCanvas = useMemo(() => <StarsCanvas />, []);

    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "transparent" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
                {MemoizedStarsCanvas}
            </div>

            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "5vw",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "1200px",
                        width: "100%",
                    }}
                >
                    {/* Contact Form */}
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <motion.div variants={useMemo(()=>slideIn("left", "tween", 0.2, 1))} style={{ width: "100%", maxWidth: "450px" }}>
                            <Paper
                                sx={{
                                    bgcolor: "rgba(16, 13, 37, 0.85)",
                                    p: 3,
                                    borderRadius: 2,
                                    width: "100%",
                                }}
                            >
                                <Typography sx={{ fontSize: 14, textTransform: "uppercase", color: "#aaa6c3", letterSpacing: "wider" }}>
                                    Get in touch
                                </Typography>
                                <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { md: 50, sm: 40, xs: 30 }, color: "white" }}>
                                    Contact.
                                </Typography>
                                <Box component="form" ref={formRef} onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                                    <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} placeholder="What's your good name?" fullWidth variant="filled" sx={{ bgcolor: "#151030", borderRadius: 1, input: { color: "white" }, label: { color: "gray" } }} />
                                    <TextField label="Your Email" name="email" value={form.email} onChange={handleChange} placeholder="What's your web address?" fullWidth variant="filled" sx={{ bgcolor: "#151030", borderRadius: 1, input: { color: "white" }, label: { color: "gray" } }} />
                                    <TextField label="Your Message" name="message" value={form.message} onChange={handleChange} placeholder="What you want to say?" fullWidth multiline rows={5} variant="filled" sx={{ bgcolor: "#151030", borderRadius: 1, input: { color: "white" }, label: { color: "gray" } }} />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#151030",
                                            py: 1.5,
                                            px: 4,
                                            borderRadius: 2,
                                            color: "white",
                                            fontWeight: "bold",
                                            transition: "box-shadow 0.3s ease-in-out",
                                            "&:hover": {
                                                boxShadow: "0px 4px 10px rgba(255, 165, 0, 0.5)",
                                            },
                                        }}
                                    >
                                        {loading ? "Sending..." : "Send"}
                                    </Button>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* 3D Earth Canvas */}
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center",minWidth: 0, }}>
                        <motion.div variants={useMemo(()=>slideIn("right", "tween", 0.2, 0.6))}>
                            <Box
                                sx={{
                                    backgroundColor: "transparent",
                                    flex: 1,
                                    height: { xs: 300, sm: 350, md: 400, lg: 500 },  
                                    width: { xs: "100%", sm: "100%", md: "700px", lg: "700px" }, 
                                    maxWidth: "700px",  
                                    overflow: "visible",
                                }}
                            >
                                {MemoizedEarthCanvas}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default SectionWrapper(ContactForm, "contact");
