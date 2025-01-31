import { Container, Box, Grid2 as Grid, useTheme, Typography, Stepper, Step, StepLabel } from '@mui/material';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { poems } from '@/src/config/poems';

const Home = () => {
    const { palette } = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const today = dayjs();

    return (
        <>
            <Head>
                <title>Esteban Carrière - portfolio</title>
            </Head>
            <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stepper activeStep={activeStep} orientation="vertical" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    {poems.map((poem, index) => (
                        <Step key={index} sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <StepLabel>
                                <Typography variant="h6">Jour {index + 1}</Typography>
                            </StepLabel>
                            <Box sx={{ padding: '1rem', backgroundColor: activeStep > index ? '#e0f7fa' : '#f3f3f3' }}>
                                {activeStep > index ? (
                                    <Typography>{poem.content}</Typography>
                                ) : (
                                    <Timer targetDate={poem.date} />
                                )}
                            </Box>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}

function Timer({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const difference = dayjs(targetDate).diff(dayjs());
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    if (!timeLeft) return <Typography>Débloqué !</Typography>;

    return (
        <Typography>
            Débloque dans {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </Typography>
    );
}

export default Home;
