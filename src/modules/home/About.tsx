import { Box, SxProps, Theme } from "@mui/material";
import figma from "../../resources/work1/images/figma.png";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
    <Box className="title" sx={sx}>
          <Box className="a" sx={sx}>A</Box>
          <Box className="bout" sx={sx}>bout</Box>
    </Box>
    <Box className="text" sx={sx}>私たちについて</Box>
    <Box className="img" sx={sx}>
      <img width = "1000px" height =  "300px" src = {figma} />
    </Box>
    
    </Box>
  );
};

const sx: SxProps<Theme> = {

  "&.About" : {
    width: "100%",
    height: 600,
    backgroundColor: "#e8f6f8"
  },

  "&.title" : {
    position: "absolute",
    display: "flex",
  },

  "&.a" : {
    paddingLeft: 80,
    fontSize: 70,
    color: "#23a1b9",
  },

  "&.bout" : {
    paddingLeft: 0,
    fontSize: 70
  },

  "&.text" : {
    paddingTop: 10,
    paddingLeft: 83,
    fontSize: 20
  },

  "&.img" : {
    paddingLeft: 30,

  },
};
