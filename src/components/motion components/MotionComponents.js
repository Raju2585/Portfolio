import { forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { color, motion } from "framer-motion";

export const MotionButton = motion(forwardRef((props, ref) => (
    <Button ref={ref} {...props} />
)));
export const MotionTypography = motion(forwardRef((props, ref) => (
    <Typography ref={ref} {...props} />
)));