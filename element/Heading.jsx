import { Typography } from "@mui/material";

export const H2title = ({ children }) => (
  <Typography
    variant="h2"
    align="center"
    fontWeight="bold"
    sx={{
      pb: 3,
    }}
  >
    {children}
  </Typography>
);
