import { AppBar, Container, Fab, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowUp } from "@mui/icons-material";
import Link from "../Link";
import BackToTop from "./BackToTop";
import HideOnScroll from "./HideOnScroll";
import Navbar from "./Navbar";
import SideDrawer from "../Sidedrawer";
import SinnoLogo from "../../public/favicon.png";
import Image from "next/image";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="bgNav">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <Link href="/">
                <IconButton aria-label="home">
                  <Image
                    src={SinnoLogo}
                    alt="Stone Innovations Enterprise Logo"
                    width={48}
                    height={48}
                  />
                </IconButton>
              </Link>
              <Navbar />
              <SideDrawer />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
