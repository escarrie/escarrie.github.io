import { poems } from '@/src/config/poems';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { emojify } from "node-emoji"

const Home = () => {
    const [activeStep, setActiveStep] = useState(0);
    const today = dayjs();
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        poems.forEach((poem, index) => {
            if (today.isAfter(dayjs(poem.date)) || today.isSame(dayjs(poem.date))) {
                setActiveStep(index + 1);
            }
        });
    }, [today]);

    useEffect(() => {
        if (stepRefs.current[activeStep]) {
            stepRefs.current[activeStep]?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeStep]);

    return (
        <>
            <Head>
                <title>Esteban Carrière - portfolio</title>
            </Head>
            <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stepper activeStep={activeStep} orientation="vertical" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    {poems.map((poem, index) => (
                        // @ts-expect-error ref is not a valid prop for Step
                        <Step
                            key={index}
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            active={activeStep > index}
                            ref={el => (stepRefs.current[index] = el)}
                        >
                            <StepLabel>
                                <Typography>
                                    {dayjs(poem.date).format('D-M-YYYY')} - Jour {index + 1}
                                </Typography>
                            </StepLabel>
                            <Box sx={{ padding: '1rem', backgroundColor: activeStep > index ? '#e0f7fa' : '#f3f3f3' }}>
                                {activeStep > index ? (
                                    <Typography sx={{whiteSpace: 'pre-wrap'}}>
                                        {emojify(poem.content)}
                                    </Typography>
                                ) : (
                                    <Timer targetDate={poem.date} poem={poem.content} />
                                )}
                            </Box>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}

function Timer({ targetDate, poem }: { targetDate: string, poem: string }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

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

    if (!timeLeft) {
        return (
            <Typography sx={{ whiteSpace: "pre-wrap" }}>
                {emojify(poem)}
            </Typography>
        );
    }

    return (
        <Typography>
            Débloque dans {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </Typography>
    );
}

export default Home;
