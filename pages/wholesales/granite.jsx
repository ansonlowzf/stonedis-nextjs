import Hero from "@components/Hero";
import { SectionContainer } from "element/SectionContainer";
import { H2title } from "element/Heading";
import { Typography, Grid } from "@mui/material";
import ContactUs from "@components/ContactUs";
import Image from "next/image";
import MetaHead from "@components/MetaHead";

const Granite = () => {
  return (
    <>
      <MetaHead
        pageTitle="Wholesales Granite Slab"
        pageDesc="We distributor / wholesale granite slab in Malaysia"
        pagePath="wholesales/granite"
        metaImg="/granite/hero.png"
      />
      <Hero
        title="Wholesales Granite Slab"
        subtitle="Distribute Granite Slab in Malaysia"
        imgSrc="/granite/hero.png"
        imgAlt="granite hero"
      />

      <SectionContainer>
        <H2title>Colour &amp; Shades</H2title>
        <Typography variant="h6" align="center" color="text.secondary">
          More Than 60 Colours Option
        </Typography>
      </SectionContainer>

      <SectionContainer>
        <Grid container spacing={2} justifyContent="center">
          <GraniteDisplay
            imgSrc="/granite/black-galaxy.png"
            stoneName="Black Galaxy"
          />
          <GraniteDisplay
            imgSrc="/granite/blue-pearl.png"
            stoneName="Blue Pearl"
          />
          <GraniteDisplay
            imgSrc="/granite/bourbon-grey.png"
            stoneName="Bourbon Grey"
          />
          <GraniteDisplay
            imgSrc="/granite/emerald-pearl.png"
            stoneName="Emerald Pearl"
          />
          <GraniteDisplay
            imgSrc="/granite/imperial-red.png"
            stoneName="Imperial Red"
          />
          <GraniteDisplay
            imgSrc="/granite/white-wave.png"
            stoneName="White Wave"
          />
          <GraniteDisplay
            imgSrc="/granite/xanxi-black.png"
            stoneName="Xan Xi Black"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <ContactUs />
      </SectionContainer>
    </>
  );
};

export default Granite;

const GraniteDisplay = ({ imgSrc, stoneName }) => (
  <Grid item xs={7}>
    <Image
      src={imgSrc}
      alt={`granite ${stoneName}`}
      layout="responsive"
      width={620}
      height={350}
    />
    <Typography
      component="p"
      variant="subtitle2"
      align="center"
      sx={{ mt: 1, mb: 2 }}
    >
      {stoneName}
    </Typography>
  </Grid>
);
