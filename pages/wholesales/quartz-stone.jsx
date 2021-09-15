import Hero from "@components/Hero";
import { Typography, Grid } from "@mui/material";
import { ZenstoneDisplay } from "@components/ZenstoneDisplay";
import { SectionContainer } from "element/SectionContainer";
import { H2title } from "element/Heading";
import { SlabDisplay } from "@components/SlabDisplay";
import ContactUs from "@components/ContactUs";

const QuartzStone = () => {
  return (
    <>
      <Hero
        title="Wholesales Genuine Quartz Stone"
        subtitle="Distribute Genuine Quartz Stone in Malaysia"
        imgSrc="/quartz-stone/hero.png"
        imgAlt="quartz stone hero"
      />

      <SectionContainer>
        <H2title>Colour &amp; Shades</H2title>
        <Typography variant="h6" align="center" color="text.secondary">
          More Than 60 Colours Option
        </Typography>
      </SectionContainer>

      <SectionContainer>
        <Grid container justifyContent="center" spacing={1}>
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101503.png"
            stoneName="Smoothie White"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101506.png"
            stoneName="Smoothie Grey"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101508.png"
            stoneName="Smoothie Beige"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101509.png"
            stoneName="Red Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101510.png"
            stoneName="Brown Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101511.png"
            stoneName="Blue Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101512.png"
            stoneName="Purple Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101513.png"
            stoneName="Orange Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101521.png"
            stoneName="White Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101522.png"
            stoneName="Black Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101523.png"
            stoneName="Snow White"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101524.png"
            stoneName="Grey Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101525.png"
            stoneName="Beige Mirror"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101526.png"
            stoneName="Crystal White"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101527.png"
            stoneName="White Planet"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q101528.png"
            stoneName="Icy White"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q3015.png"
            stoneName="Shell King"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201501.png"
            stoneName="Brown Cream"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201502.png"
            stoneName="Yellow Hill"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201503.png"
            stoneName="England Coffee"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201505.png"
            stoneName="Pure Black"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201506.png"
            stoneName="Grey Forest"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q202032.png"
            stoneName="Pure Grey"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q4015.png"
            stoneName="Purple Galaxy"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601501.png"
            stoneName="Blue Sapphire"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601502.png"
            stoneName="Beige Gold"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601503.png"
            stoneName="White Gold"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601504.png"
            stoneName="Cameo"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601505.png"
            stoneName="Black Gold"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601506.png"
            stoneName="White Gold Sand"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601507.png"
            stoneName="Beige Gold Medium"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601508.png"
            stoneName="Coffee Gold Sand"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q601509.png"
            stoneName="Golden Coffee"
          />
          <ZenstoneDisplay
            imgSrc="/quartz-stone/Q201541.png"
            stoneName="Super White"
          />
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Grid container spacing={1} justifyContent="center">
          <SlabDisplay
            imgSrc="/quartz-stone/Q801501slab.jpg"
            stoneName="Cararra White"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q801534.jpg"
            stoneName="Black Ice Bloom"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q801535.jpg"
            stoneName="Black Marquina S"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802021.jpg"
            stoneName="Snow Flower"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802023.jpg"
            stoneName="Arabescato Corchia"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802025.jpeg"
            stoneName="Black Marquina"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802026.jpg"
            stoneName="Fabricator White"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802027.jpg"
            stoneName="Staturio White"
          />

          <SlabDisplay
            imgSrc="/quartz-stone/Q802031-slab.jpg"
            stoneName="Calacatta Venato"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <ContactUs />
      </SectionContainer>
    </>
  );
};

export default QuartzStone;
