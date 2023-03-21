// Drawer_Left_NavBar_Component
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/material";

// ! Re_usable Component

const DrawList = ({ setIsOpen }) => {
  const face = "SAd";
  const profile_pic = "SAd";
  const response = JSON.parse(sessionStorage.getItem("response"));
  return (
    <Box width='280px'>
      <Typography
        // fontSize={{ xs: 18, md: 16, lg: 18 }}
        variant='h6'
        sx={{ pt: 1 }}
        // fontWeight='bold'
        textAlign={"center"}
        color={"#F1AB15"}
      >
        Digital Identification
      </Typography>
      <Card
        sx={{
          m: 1,
          // mt: 5,
        }}
      >
        <CardContent
          sx={{
            border: "2px solid burlywood",
            backgroundImage: "linear-gradient(180deg, #fff, #f6f4ed  )",
          }}
        >
          <Box
            style={{ textAlign: "center" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={"-0.5rem"}
          >
            <Avatar
              alt='profile_pic'
              src={
                face?.length
                  ? `data:image/jpeg;base64,${response?.userData[0]?.ocr_user_image}`
                  : profile_pic
              }
              sx={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <br />
            {/* <br /> */}
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 2 }}
              fontWeight='bold'
              textAlign={"center"}
            >
              Date of Birth
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 1 }}
              textAlign={"center"}
            >
              {response?.userData[0]?.date_of_birth}
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 2 }}
              fontWeight='bold'
              textAlign={"center"}
            >
              Sex
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 1 }}
              textAlign={"center"}
            >
              {response?.userData[0]?.gender}
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 2 }}
              fontWeight='bold'
              textAlign={"center"}
            >
              Date of Expiry
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 1 }}
              textAlign={"center"}
            >
              {response?.userData[0]?.dateOfExpiry}
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 2 }}
              fontWeight='bold'
              textAlign={"center"}
            >
              Nationality
            </Typography>
            <Typography
              fontSize={{ xs: 18, md: 16, lg: 18 }}
              variant='body2'
              // sx={{ mt: 1 }}
              textAlign={"center"}
            >
              {response?.userData[0]?.nationality}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          m: 1,
        }}
      >
        <CardContent
          sx={{
            border: "2px solid burlywood",
            backgroundImage: "linear-gradient(180deg, #fff, #f6f4ed  )",
          }}
        >
          <Box
            style={{ textAlign: "center" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              alt='profile_pic'
              src={
                face?.length
                  ? `${
                      "https://efreshsoftwares.in/ivrdigital/" +
                      response?.userData[0]?.qr_image
                    }`
                  : profile_pic
              }
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DrawList;
