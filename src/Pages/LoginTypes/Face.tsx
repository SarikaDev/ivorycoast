import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { toast } from "react-toastify";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
import { PATHS } from "../../utils/constants";
import axios from "axios";

const Face = () => {
  const navigate = useNavigate();
  const response = JSON.parse(sessionStorage.getItem("response") as string);
  const auth = JSON.parse(sessionStorage.getItem("auth") as string);
  // ! useCase of useLocalStorage Hook
  // const [{ identityNumber }] = useLocalStorage("Details");
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [cropped, setCropped] = useState<boolean>(false);
  const webcamRef = useRef<any>(null);
  const [image, setImage] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<any>(null);

  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices],
  );

  //   ! Functionality

  const handleCropChange = useCallback(() => {
    const croppedImgData = imgRef.current.cropper
      .getCroppedCanvas()
      .toDataURL("image/jpeg", 1);
    setCroppedImage(croppedImgData);
    // console.log(imgRef)
  }, []);

  const cropImage = () => {
    setImage(croppedImage);
    setCropped(true);
  };

  const capture = useCallback(() => {
    setImage(webcamRef!.current!.getScreenshot());
  }, [webcamRef]);

  const [imgs, setImgs] = useState("");

  const handleNext = () => {
    //  navigate(PATHS.dashboard)
    // fetch("http://gn-testapi.tech5.tech:9090/MBAP/api/verifyBiometrics", {
    // fetch("http://api/MBAP/api/verifyBiometrics", {
    // fetch("http://gn-testapi.tech5.tech:9090/MBAP/api/verifyBiometrics", {

    fetch(
      "https://5swnnhes68.execute-api.ap-south-1.amazonaws.com/MBAP/api/verifyBiometrics",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify({
          transactionId: "b3c350aa-2734-48d1-345-7777777",
          transactionSource: "nxGen MBAP TestTool",
          uid: "111122223333555555",
          needTemplates: 0,
          probeFace: {
            pos: "F",
            image: croppedImage.replace("data:image/jpeg;base64,", ""),
            template: null,
            quality: 0.0,
          },
          galleryFace: {
            pos: "F",
            image: response.userData[0]?.ocr_user_image,
            template: null,
            quality: 0.0,
          },
          probeFingerData: null,
          galleryFingerData: null,
          probeIrisData: null,
          galleryIrisData: null,
          faceThreshold: "6",
          fingerThreshold: "6",
          irisThreshold: "6",
        }),
      },
    )
      .then(function (response) {
        return response?.json();
      })
      .then(function (data) {
        setIsLoading(false);
        const response = JSON.stringify(data);
        sessionStorage.setItem("auth", response);

        if (data?.verificationResult === true) {
          navigate(PATHS.dashboard);
        } else if (data?.verificationResult === false) {
          if (data?.error?.errorMessage === "Verification Failed") {
            toast.error("Authentication failed, face mismatch");
          } else {
            toast.error("No proper face is captured");
          }
          setCroppedImage("");
          setImage("");
          setCropped(false);
        }
      });
    setIsLoading(true);
  };

  useEffect(() => {
    if (response?.statusCode !== 200 || !response?.statusCode) {
      navigate("/");
    }
  }, [navigate, response?.statusCode]);
  useEffect(() => {
    if (auth?.verificationResult === true) {
      navigate(PATHS?.dashboard);
    }
  }, [auth?.verificationResult, navigate]);

  const retake = () => {
    setCroppedImage("");
    setImage("");
    setCropped(false);
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div>
      <div
        className='d-flex justify-content-center align-items-center'
        id='contentContainer'
      >
        <div id='containerRight'>
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress color='info' />
            </Box>
          ) : (
            <>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignContent={"center"}
                justifyContent={"center"}
                height={"20.9rem"}
                width={"100%"}
                marginTop={"2rem"}
              >
                {!image?.length ? (
                  <Webcam
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    width={500}
                    style={{
                      borderRadius: 5,
                    }}
                    //videoConstraints={videoConstraints}
                    videoConstraints={{
                      width: 519,
                      height: 400,
                      //facingMode,
                      deviceId,
                    }}
                  />
                ) : (
                  <Box marginTop={".5rem"}>
                    {cropped && croppedImage?.length ? (
                      <img
                        alt='sda'
                        style={{
                          width: imgRef?.current?.cropper?.cropBoxData?.width,
                          height: imgRef?.current?.cropper?.cropBoxData?.height,
                        }}
                        src={croppedImage}
                      />
                    ) : (
                      <Cropper
                        cropend={() => handleCropChange()}
                        ref={imgRef}
                        src={image as string}
                        zoomable={false}
                        autoCropArea={-0.01}
                        background={false}
                      />
                    )}
                  </Box>
                )}
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                {!image?.length ? (
                  <Box display={"flex"} gap={"2rem"}>
                    <Button
                      style={{
                        background: "#bd6100",

                        width: "13rem",
                      }}
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      style={{
                        background: "#bd6100",

                        width: "13rem",
                      }}
                      onClick={() => {
                        capture();
                      }}
                    >
                      Capture
                    </Button>
                  </Box>
                ) : (
                  <Box
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      marginTop: "2rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      style={{
                        background: "#bd6100",

                        width: "13rem",
                      }}
                      onClick={() => {
                        retake();
                      }}
                    >
                      Re-take
                    </Button>

                    {/* //! cropper  === true ? "Continue-btn" : "Crop-btn"   */}

                    {cropped ? (
                      <Button
                        style={{
                          background: "#bd6100",

                          width: "13rem",
                        }}
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        style={{
                          background: "#bd6100",

                          width: "13rem",
                        }}
                        onClick={() => {
                          cropImage();
                        }}
                      >
                        Crop
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Face;
