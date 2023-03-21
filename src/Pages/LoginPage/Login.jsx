import { useState, useCallback, useEffect } from "react";
// import LoadingSpinner from "../../components/Common/Spinner";
import image from "../../assets/app_logo.png";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { toast } from "react-toastify";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";

import PersonIcon from "@mui/icons-material/Person";
const Login = () => {
  const navigate = useNavigate();
  const [qr, setQr] = useState("");
  const [qrText, setQrText] = useState("");
  const [code, setCode] = useState(400);

  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isValid, setValid] = useState(false);

  const validate = useCallback(() => {
    return mobile.length;
  }, [mobile.length]);

  useEffect(() => {
    if (mobile.length === 9) {
      const isValid = validate();
      setValid(isValid);
    }
  }, [mobile.length, validate]);

  const handleNumber = e => {
    if (!e.target.validity.patternMismatch) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    axios.defaults.headers.common.authorization = "";
    sessionStorage.clear();
  }, []);
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  const HandelSubmit = useCallback(
    e => {
      fetch("https://efreshsoftwares.in/ivrdigital/qr_generator.php")
        .then(function (response) {
          return response?.json();
        })
        .then(function (data) {
          const response = JSON.stringify(data);
          sessionStorage.setItem("response", response);
          setQr("https://efreshsoftwares.in/ivrdigital/" + data.QR);
          setQrText(data?.Qrtext);
        });
      setNum(num + 1);
      setCode("");
    },
    [mobile],
  );

  useEffect(() => {
    fetch("https://efreshsoftwares.in/ivrdigital/qr_generator.php")
      .then(function (response) {
        return response?.json();
      })
      .then(function (data) {
        const response = JSON.stringify(data);
        setQr("https://efreshsoftwares.in/ivrdigital/" + data.QR);
        setQrText(data?.Qrtext);
        sessionStorage.setItem("response", response);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 1);
      if (code !== 200) {
        fetch("https://efreshsoftwares.in/ivrdigital/qr_generator.php")
          .then(function (response) {
            return response?.json();
          })
          .then(function (data) {
            const response = JSON.stringify(data);
            setQr("https://efreshsoftwares.in/ivrdigital/" + data.QR);
            setQrText(data?.Qrtext);
            sessionStorage.setItem("response", response);
          });
        setCode(400);
      }
    }, 30000);
  }, [num]);

  useEffect(() => {
    fetch(`https://efreshsoftwares.in/ivrdigital/check_authstatus.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `qr_code=${4515}`,
    }).then(res => {
      console.log("res5645464:", res);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNum1(num1 + 1);
    }, 5000);
    if (qrText?.length && code === 400) {
      fetch(`https://efreshsoftwares.in/ivrdigital/checkqr_status.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `qr_id=${qrText}`,
      })
        .then(function (response) {
          return response?.json();
        })
        .then(function (data) {
          const response = JSON.stringify(data);
          sessionStorage.setItem("qrCheck", response);
          setCode(data?.statusCode);
          if (data.statusCode === 200) {
            setIsLoading(true);
            //
          } else {
            // setIsLoading(true)
            // console.log('scanned')
          }
          // const response = JSON.stringify(data);
          // setQr("https://efreshsoftwares.in/ivrdigital/"+data.QR)
          // sessionStorage.setItem("response", response);
        });
    }
  }, [qrText, num1]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      id='contentContainer'
    >
      <Box
        width={"65%"}
        height={"75%"}
        style={{ backgroundColor: "#f6f4ed" }}
        boxShadow={5}
        borderRadius={3}
        borderLeft={"10px solid #bd6100"}
        display={"flex"}
      >
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <img
            width={"40%"}
            src={image}
            alt='logo'
            style={{ marginTop: "-2rem" }}
          />
          <Typography
            fontWeight={600}
            textTransform={"uppercase"}
            marginTop={"1.5rem"}
            border={"1px solid black"}
            padding={"0.6rem"}
            borderRadius={"12px"}
            backgroundColor={"white"}
            fontSize={"1.2rem"}
            color={"#bd6100"}
          >
            République de Côte d'Ivoire
          </Typography>
          <Typography
            marginTop={"1rem"}
            fontWeight={600}
            width={"70%"}
            textAlign={"center"}
          >
            A single trusted digital identity for all citizens, residents and
            visitors.
          </Typography>
        </Box>
        <Box
          borderRight={"1px solid #bd6100"}
          height={"88%"}
          marginTop={"3.5%"}
        ></Box>
        {isLoading ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"50%"}
          >
            {" "}
            <CircularProgress color='info' />
          </Box>
        ) : (
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Typography
                color={"#bd6100"}
                fontSize={"1.8rem"}
                fontWeight={600}
              >
                Login to smart services
              </Typography>
              <Typography
                color={"#bd6100"}
                fontWeight={600}
                textAlign={"center"}
                marginTop={"2rem"}
              >
                Please scan the QR Code
              </Typography>
              {/* <TextField
                color={"info"}
                type='text'
                inputProps={{ autocomplete: "off" }}
                variant='outlined'
                style={{ width: "100%", marginTop: "1rem" }}
                label={"ID Number"}
                onChange={handleNumber}
                value={mobile || ""}
                pattern='^[0-9]*$'
                required
              /> */}
              {/* <Box > */}
              <img
                src={qr}
                alt=''
                width={"50%"}
                height={"50%"}
                style={{ cursor: "none", mixBlendMode: "color-burn" }}
              />
              {/* <img src={image2} alt="" style={{ position:'absolute',
                  top:'55px',
                  right:'125px',backgroundColor:'#bd6100',width:'13%',objectFit:'cover'}} /> */}

              <Button
                // startIcon={<ReplayIcon/>}
                style={{
                  width: "70%",
                  // width: "auto",
                  // width:'1rem',
                  // height:'1rem',
                  marginTop: "1rem",
                  backgroundColor: "#bd6100",
                  color: "white",

                  // borderRadius:'100%'
                }}
                // size='small'
                onClick={HandelSubmit}
              >
                Re generate QR
              </Button>
              {/* </Box> */}
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Login;
