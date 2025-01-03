import { Container, Box, Grid2 as Grid, Typography, useTheme } from '@mui/material';
import Head from 'next/head';

const Home = () => {
    const { palette } = useTheme();

    return (
        <>
            <Head>
                <title>Esteban Carrière - portfolio</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    maxWidth: "100vw",
                }}
            >
                <Container
                    sx={{
                        position: 'relative',
                        minHeight: 'calc(100dvh-64px)',
                        minWidth: '100% !important',
                        maxWidth: "100vw",
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url('/background-${palette.mode == "dark" ? 'dark' : 'light'}.jpg')`,
                            backgroundAttachment: 'fixed',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.5,
                        }}
                    />
                    <Grid
                        container
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            minHeight: 'calc(100dvh - 75px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: "100vw !important",
                            paddingX: 20,
                        }}
                        spacing={3}
                    >
                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4,
                            }}
                        >
                            <Box
                                component="img"
                                src="/banner.svg"
                                alt="Banner"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Grid>

                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 8,
                            }}
                        >
                            
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;
