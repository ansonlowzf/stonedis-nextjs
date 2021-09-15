import Hero from "@components/Hero";
import StoneDisplay from "@components/StoneDisplay";
import { Grid, Typography } from "@mui/material";
import { H2title } from "element/Heading";
import { SectionContainer } from "element/SectionContainer";
import ContactUs from "@components/ContactUs";
import MetaHead from "@components/MetaHead";

const CaesarstonePage = () => {
  return (
    <>
      <MetaHead
        pageTitle="Wholesales Caesarstone Slab"
        pageDesc="We distributor / wholesale Caesarstone quartz surface slab in Malaysia"
        pagePath="wholesales/caesarstone"
        metaImg="/caesarstone/hero.jpg"
      />
      <Hero
        title="Wholesales Caesarstone"
        subtitle="Distribute Caesarstone in Malaysia"
        imgSrc="/caesarstone/hero.jpg"
        imgAlt="Caesarstone hero"
      />

      <SectionContainer maxWidth="lg">
        <H2title>Colour &amp; Shades</H2title>
        <Typography variant="h6" align="center" color="text.secondary">
          All 32 Colours Available In Malaysia
        </Typography>
      </SectionContainer>

      <SectionContainer>
        <Grid container spacing={1} justifyContent="center">
          <StoneDisplay
            imgSrc="/caesarstone/1141.png"
            stoneName="1141 Pure White (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/2141.png"
            stoneName="2141 Snow (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/3100.png"
            stoneName="3100 Jet Black (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/3101.png"
            stoneName="3101 Piatto Black (Natural)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4001.png"
            stoneName="4001 Fresh Concrete (Matt)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4011.png"
            stoneName="4011 Cloudburst Concrete (Rough)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4023.png"
            stoneName="4023 Topus Concrete (Rough)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4030.png"
            stoneName="4030 Oyster (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4033.png"
            stoneName="4033 Rugged Concrete (Rough)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4044.png"
            stoneName="4044 Airy Concrete (Rough)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4120.png"
            stoneName="4120 Raven (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4130.png"
            stoneName="4130 Clamshell (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4220.png"
            stoneName="4220 Buttermilk (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4230.png"
            stoneName="4230 Shitake (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4330.png"
            stoneName="4330 Ginger (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4350.png"
            stoneName="4350 Mink (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4600.png"
            stoneName="4600 Organic White (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4601.png"
            stoneName="4601 Frozen Terra (Matt)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/4735.png"
            stoneName="4735 Oxidian (Natural)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5003.png"
            stoneName="5003 Piatra Grey (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5031.png"
            stoneName="5031 Statuario Maximus (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5100.png"
            stoneName="5100 Vanilla Noir (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5101.png"
            stoneName="5101 Empira Black (Polished/Natural)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5131.png"
            stoneName="5131 Calacatta Nuvo (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5133.png"
            stoneName="5133 Symphony Grey (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5141.png"
            stoneName="5141 Frosty Carrina (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5143.png"
            stoneName="5143 White Attica (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5151.png"
            stoneName="5151 Empira White (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/5810.png"
            stoneName="5810 Black Tempal (Natural)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/6046.png"
            stoneName="6046 Moorland Fog (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/6011.png"
            stoneName="6011 Intense White (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/6131.png"
            stoneName="6131 Bianco Drift (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/6313.png"
            stoneName="6313 Turbine Grey (Polished)"
          />

          <StoneDisplay
            imgSrc="/caesarstone/6338.png"
            stoneName="6338 Woodlands (Polished)"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <ContactUs />
      </SectionContainer>
    </>
  );
};

export default CaesarstonePage;
