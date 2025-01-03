import { Container, Grid2 as Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container maxWidth="xl" sx={{ marginY: 3}}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h6">Contacts</Typography>
                    <Link href="#" color="inherit">Contact 1</Link><br />
                    <Link href="#" color="inherit">Contact 2</Link><br />
                    <Link href="#" color="inherit">Contact 3</Link>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h6">Reseaux</Typography>
                    <Link href="#" color="inherit">Reseau 1</Link><br />
                    <Link href="#" color="inherit">Reseau 2</Link><br />
                    <Link href="#" color="inherit">Reseau 3</Link>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h6">Projects</Typography>
                    <Link href="#" color="inherit">Project 1</Link><br />
                    <Link href="#" color="inherit">Project 2</Link><br />
                    <Link href="#" color="inherit">Project 3</Link>
                </Grid>

                <Grid size={12}>
                    <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '1rem' }}>
                        © 1999 - {new Date().getFullYear()}.<br/>
                        All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
