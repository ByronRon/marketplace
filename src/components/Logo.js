import { styled } from "@mui/material/styles";

const Brand = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: "normal",
  fontSize: "26px",
}));

const Logo = ({ children }) => {
  return (
    <Brand>{children}</Brand>
    // <img
    //   alt="Logo"
    //   src="/static/logo.svg"
    //   {...props}
    // />
  );
};

export default Logo;
