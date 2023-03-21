import { styled, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(() => ({
  backgroundColor: "#f1f1f1",
  zIndex: 0,
}));

const MuiDrawer = ({ children, ...other }) => {
  const theme = useTheme();

  return (
    <StyledDrawer
      anchor='left'
      sx={{
        width: drawerWidth,
        ".css-dm4aar-MuiPaper-root-MuiDrawer-paper": { width: drawerWidth },

        ".css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
          width: drawerWidth,
          borderRight: `2px solid ${theme.palette.primary.main}`,
        },
      }}
      {...other}
      elevation={5}
      variant={"permanent"}
    >
      {children}
    </StyledDrawer>
  );
};

export default MuiDrawer;
