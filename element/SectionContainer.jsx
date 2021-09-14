import { Container } from "@mui/material";

export const SectionContainer = ({ children, maxWidth }) => (
  <Container maxWidth={maxWidth} sx={{ mb: 20 }}>
    {children}
  </Container>
);
