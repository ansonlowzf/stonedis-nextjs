import { Container, Typography } from "@mui/material";
import Image from "next/image";
import MetaHead from "@components/MetaHead";

const Tools = () => {
  return (
    <>
      <MetaHead
        pageTitle="Wholesales Stone Fabrication Tools"
        pageDesc="We distribute or wholesale stone fabrication tools in Malaysia"
        pagePath="/tools"
        metaImg="/caesarstone/hero.jpg"
      />
      <Typography variant="h1" align="center" sx={{ mt: 13, mb: 6 }}>
        Fabrication / Installation Tools
      </Typography>

      <Container maxWidth="xs" sx={{ mb: 13 }}>
        <Image
          src="/tools/marble-adhesive.jpg"
          alt="marble adhesive"
          layout="responsive"
          width={800}
          height={800}
        />
        <Typography align="center" paragraph sx={{ mt: 5 }}>
          <strong>Marble adhesive</strong>, bonding stone in short time and
          operate in cold condition (-10 C). Could be polished after dried.
        </Typography>
        <Typography align="center" gutterBottom>
          There are 3 colour options:-
        </Typography>
        <Typography align="center">Transparent</Typography>
        <Typography align="center">Black</Typography>
        <Typography align="center">White</Typography>
      </Container>
    </>
  );
};

export default Tools;
