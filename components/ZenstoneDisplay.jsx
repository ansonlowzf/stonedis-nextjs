import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export const ZenstoneDisplay = ({ imgSrc, stoneName }) => {
  return (
    <Grid item xs={12} md={4}>
      <Image
        src={imgSrc}
        alt={stoneName}
        layout="responsive"
        width={600}
        height={600}
      />
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ mt: 1, mb: 3 }}
      >
        {stoneName}
      </Typography>
    </Grid>
  );
};
