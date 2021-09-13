import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@components/Link";
import Copyright from "@components/Copyright";
import Hero from "@components/Hero";

export default function Index() {
  return (
    <>
      <Hero
        title="Stone Distributor Malaysia"
        subtitle="Specializing In Stone Slab Distribution"
        imgSrc="/home-image/hero.png"
        imgAlt="Factory Entrance"
      />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
