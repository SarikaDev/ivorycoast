import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import Modal from "@mui/material/Modal";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import LinkIcon from "@mui/icons-material/Link";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();
  const auth = JSON.parse(sessionStorage.getItem("auth"));
  useEffect(() => {
    if (auth != null) {
      if (auth.verificationResult === null) {
        navigate("/");
      }
      if (auth.verificationResult === false || !auth.verificationResult) {
        navigate("/");
      }
    } else if (auth === null) {
      navigate("/");
    }
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Demo Service
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            For Testing.
          </Typography>
        </Box>
      </Modal>
      <Typography
        variant='h6'
        sx={{ mb: 3 }}
        textAlign={"left"}
        fontFamily={"sans-serif"}
        color={"#F1AB15"}
      >
        Services
      </Typography>
      <Grid container>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap='wrap'
        >
          <Grid item>
            <Card sx={{ width: "12rem" }}>
              <CardContent
                sx={{
                  border: "1px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "2rem", width: "2rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h7'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    // sx={{ backgroundColor: "burlywood" }}

                    onClick={handleOpen}
                  >
                    Start Service
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: "12rem" }}>
              <CardContent
                sx={{
                  border: "1px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <LinkIcon style={{ height: "2rem", width: "2rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h7'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  UseFull Links
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    // sx={{ backgroundColor: "primary" }}
                    onClick={handleOpen}
                  >
                    Start Service
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: "12rem" }}>
              <CardContent
                sx={{
                  border: "1px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <ArticleOutlinedIcon
                    style={{ height: "2rem", width: "2rem" }}
                  />
                </Box>
                <Typography
                  gutterBottom
                  variant='h7'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  News
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    // sx={{ backgroundColor: "burlywood" }}
                    onClick={handleOpen}
                  >
                    Start Service
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: "12rem" }}>
              <CardContent
                sx={{
                  border: "1px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <ControlPointIcon style={{ height: "2rem", width: "2rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h7'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Other Services
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    // sx={{ backgroundColor: "burlywood" }}
                    onClick={handleOpen}
                  >
                    more
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        // sx={{ mt: 3, mb: 3, paddingLeft: 1.8 }}
        textAlign={"left"}
        variant='h6'
        sx={{ mt: 3, mb: 3 }}
        fontFamily={"sans-serif"}
        color={"#F1AB15"}
      >
        Recently Used
      </Typography>
      <Grid container>
        <Grid
          container
          display={"flex"}
          justifyContent={"flex-start"}
          gap={2}
          sx={{ pl: 1 }}
        >
          <Grid item>
            <Card sx={{ width: "12rem" }}>
              <CardContent
                sx={{
                  border: "1px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "2rem", width: "2rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h7'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    // sx={{ backgroundColor: "burlywood" }}

                    onClick={handleOpen}
                  >
                    Start Service
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
