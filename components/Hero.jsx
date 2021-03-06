import { Grid, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Grid
      container
      sx={{
        position: `relative`,
        height: "calc(100vh - 64px)",
        width: `100%`,
        overflow: `hidden`,
        zIndex: "-100",
        mb: 20,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
          zIndex: "100",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={10}
          md={8}
          sx={{ zIndex: "101" }}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            color="primary"
            sx={{
              fontWeight: 400,
              zIndex: "102",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="h4"
            align="center"
            color="common.white"
            sx={{
              mb: 10,
              zIndex: "101",
            }}
          >
            {subtitle}
          </Typography>
          <Typography component="p" variant="h6" color="primary" gutterBottom>
            Explore
          </Typography>
          <ArrowDownward fontSize="large" color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
