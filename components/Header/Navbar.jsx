import { Stack, Toolbar } from "@mui/material";
import Link from "../Link";
import { mainRoutes } from "../../const/nav-links";

const Navbar = () => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, lg: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {mainRoutes.map(({ name, path }, i) => (
          <Link
            key={`${name}${i}`}
            href={path}
            variant="button"
            underline="none"
            sx={{
              opacity: 0.7,
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            {name}
          </Link>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
