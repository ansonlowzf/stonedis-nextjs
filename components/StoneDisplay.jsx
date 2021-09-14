import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const StoneDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      {/* Aspect Ratio - 16/9 */}
      <Image src={imgSrc} alt={stoneName} width={620} height={350} />
      <Grid container item justifyContent="center" sx={{ mb: 3 }}>
        <Grid item>
          <Typography component="p" variant="subtitle2" align="center">
            {stoneName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoneDisplay;
