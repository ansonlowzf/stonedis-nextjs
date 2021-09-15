import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 10, bgcolor: "bgNav.main" }}>
      <Typography align="center" color="common.white">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </Box>
  );
};

export default Footer;
