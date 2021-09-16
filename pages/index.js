import Hero from "@components/Hero";
import { SectionContainer } from "element/SectionContainer";
import { H2title } from "element/Heading";
import SectionText from "element/SectionText";
import { Paper, Grid, Typography } from "@mui/material";
import ContactUs from "@components/ContactUs";
import MetaHead from "@components/MetaHead";

export default function Index() {
  return (
    <>
      <MetaHead
        pageTitle="Home"
        pageDesc="We distributor or wholesale quartz stone, sintered stone, granite, marble and onyx in Malaysia"
        pagePath="/"
        metaImg="/home/hero.jpg"
      />

      <Hero
        title="Stone Distributor Malaysia"
        subtitle="Stone Surfacing Slab Wholesales and Distribution"
        imgSrc="/home-image/hero.png"
        imgAlt="Factory Entrance"
      />

      <SectionContainer maxWidth="md">
        <H2title>About Us</H2title>
        <SectionText>
          <Typography paragraph>
            {`We distribute quartz stone, sintered stone, granite, marble and onyx surfacing slab in Malaysia`}
          </Typography>
          <Typography paragraph>
            {`With more than 800 stone slabs ready-stock in our Klang Valley's warehouse.
      Check out factory video to see our ready-stock.`}
          </Typography>
          <Typography>
            Purchase just enough quantity for your project
          </Typography>
        </SectionText>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <H2title>Warehouse Tour</H2title>
        <Paper elevation={4}>
          <Grid container justify="center">
            <iframe
              title="stone distributor warehouse walkthrough"
              style={{ position: `relative`, width: `100%`, height: 500 }}
              src="https://www.youtube.com/embed/1gjWK_Cx2_s"
              scrolling="no"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Paper>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <ContactUs />
      </SectionContainer>
    </>
  );
}
