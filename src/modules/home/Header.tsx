import { Box, SxProps, Theme } from "@mui/material";
import logo from "../../resources/work1/images/logo.png";
export const Header = () => {
  return (
    <Box className="Header" sx={sx}>

        <img width = "100%" height =  "70px" src = {logo} />

      <Box className="Top" sx={sx}>TOP</Box>
      <Box className="service" sx={sx}>SERVICE</Box>
      <Box className="company" sx={sx}>COMPANY</Box>
      <Box className="contact" sx={sx}>
        <Box className="contact-text" sx={sx}>
          CONTACT
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: 60,

    
  },


  "&.Top" : {
    marginTop: 2.5,
    marginLeft: 70,

  },
  "&.service" : {
    marginTop: 2.5,
    marginLeft: 6,

  },
  "&.company" : {
    marginTop: 2.5,
    marginLeft: 6,

  },
  "&.contact" : {
    marginLeft: 4,
    width: "100%",
    height:"100%",
    backgroundColor: "aqua",
  },
  "&.contact-text" : {
    marginTop: 2.5,
    marginLeft: 6,
    textColor: "white",
    
  },
};
