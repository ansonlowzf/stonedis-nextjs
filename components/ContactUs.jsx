import { Avatar, Grid, Typography } from "@mui/material";
import { H2title } from "element/Heading";

const ContactUs = () => {
  return (
    <>
      <H2title>Quotation &amp; Inquiry</H2title>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        sx={{ my: 5 }}
      >
        <Avatar sx={{ width: 150, height: 150 }} src="/anson-avatar.png" />
      </Grid>
      <Typography component="p" variant="h6" align="center" paragraph>
        {`Call / WhatsApp - Anson Low`}
      </Typography>
      <Typography component="p" variant="h6" align="center" paragraph>
        <a href="tel:+60168262314">016-8262 314</a>
      </Typography>

      <Typography component="p" variant="body1" paragraph align="center">
        Warehouse Location: Kampung Baru Sungai Buloh, Selangor
      </Typography>
    </>
  );
};

export default ContactUs;
