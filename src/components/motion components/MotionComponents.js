import { forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { color, motion } from "framer-motion";
import { Box } from '@mui/material';

export const MotionButton = motion(forwardRef((props, ref) => (
    <Button ref={ref} {...props} />
)));
export const MotionTypography = motion(forwardRef((props, ref) => (
    <Typography ref={ref} {...props} />
)));
export const MotionBox = motion(forwardRef((props, ref) => (
    <Box ref={ref} {...props} />
)));
