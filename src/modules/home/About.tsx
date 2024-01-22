import { Box, SxProps, Theme } from "@mui/material";
import aboutimg from "../../resources/work1/images/about.jpg";


export const About = () => {
  return (
    <Box className="About" sx={sx}>

      <Box className="title">
        <p className="uni">A</p>
        <p className="ab">B</p>
        <p className="ab">O</p>
        <p className="ab">U</p>
        <p className="ab">T</p>
      </Box>

      <p className="watasitati">私たちについて</p>

      <img className="minigazou"src={aboutimg}/>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    height:"1400px",
    backgroundColor:"#eaf6f8",
    position:"relative",
  },

};
