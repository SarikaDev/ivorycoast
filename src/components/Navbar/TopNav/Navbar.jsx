import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import logo2 from "../../../assets/g2.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCallback } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
const Img = styled("img")(() => ({
  width: "450px",
  height: "70px",
  // marginTop: "-0.5rem",
  marginLeft: "26rem",
  cursor: "pointer",
}));

const StyledNavbar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.secondary,
  paddingTop: theme.spacing(0.3),
  paddingLeft: theme.spacing(0.3),
  paddingBottom: theme.spacing(0.1),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "row",
  position: "fixed",
  top: 0,
  left: 0,
  alignItems: "center",
  boxShadow: `0px 0px ${theme.palette.primary.main}`,
  justifyContent: "space-between",
}));

const Navbar = ({ ...other }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {};

  const logOut = useCallback(() => {
    axios.defaults.headers.common.authorization = "";
    sessionStorage.clear();
    navigate("/");
  }, [navigate]);

  return (
    <StyledNavbar {...other}>
      <IconButton
        aria-label='send'
        color='success'
        size='small'
        sx={{ marginRight: "1%" }}
        onClick={logOut}
      >
        <LogoutIcon />
      </IconButton>
      <Toolbar>
        <Box position={"relative"}>
          <Img
            src={logo2}
            alt='Boa_logo'
            position={"absolute"}
            // left={"80%"}
            onClick={() => handleImageClick()}
          />
        </Box>
      </Toolbar>
      <Box marginLeft={"6rem"}>
        <Button size='small' variant='outlined'>
          en
        </Button>
      </Box>
      <IconButton
        aria-label='send'
        color='success'
        size='small'
        sx={{ marginRight: "1%" }}
        onClick={logOut}
      >
        <LogoutIcon />
      </IconButton>
    </StyledNavbar>
  );
};

export default Navbar;
